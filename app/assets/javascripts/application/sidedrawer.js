class Sidedrawer {

  static init() {
    if (this.instance) { return; }
    this.instance = new this;
  }

  constructor() {
    this.hidden = false;
    this.mobileActive = false;
    this.setNavTitles();
    this.initEvents();
  }

  el() {
    return $('.lb-Sidedrawer');
  }

  titles() {
    return this.el().find('ul li span');
  }

  isHidden() {
    return this.hidden;
  }

  // Private

  initEvents() {
    $(document).on('click', '.lb-Sidedrawer ul li span', (e) => this.showSection(e));
    $(document).on('click', '[data-js="show-sidedrawer"]', (e) => this.mobileShow(e));
    $(document).on('click', '[data-js="toggle-sidedrawer"]', (e) => this.toggle(e));
    document.addEventListener('turbolinks:render', () => this.turboRender());
    document.addEventListener('turbolinks:before-render', (e) => this.turboBeforeRender(e));
    document.addEventListener('turbolinks:before-cache', (e) => this.turboBeforeCache(e));
    $(window).resize(() => this.windowResized());
  }

  turboRender() {
    this.setNavTitles();
  }

  turboBeforeRender(e) {
    const body = $(e.data.newBody);
    body.toggleClass('is-sidedrawerHidden', this.hidden);
  }

  turboBeforeCache(e) {
    mui.overlay('off');
  }

  setNavTitles() {
    this.titles().toArray().forEach((t) => {
      const title = $(t);
      const active = title.is('.is-active');
      if (!active) { title.next().hide(); }
    });
  }

  toggle() {
    $('body').toggleClass('is-sidedrawerHidden', !this.hidden);
    this.hidden = !this.hidden;
  }

  mobileShow() {
    const overlay = $(mui.overlay('on', { onclose: () => this.mobileInactivate() }));
    setTimeout(() => this.mobileActivate(), 20);
  }

  mobileActivate() {
    this.mobileActive = true;
    this.el().addClass('is-active');
  }

  mobileInactivate() {
    this.mobileActive = false;
    this.el().removeClass('is-active');
  }

  showSection(e) {
    $(e.target).next().slideToggle(200);
  }

  windowResized() {
    if (!this.mobileActive) { return; }
    const w = $(window).width();
    if (w > 767) { mui.overlay('off'); }
  }

}


$(() => Sidedrawer.init());
