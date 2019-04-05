class Sidedrawer {

  constructor() {
    this.el = $('.lb-Sidedrawer');
    this.titleEls = this.el.find('ul li strong');
    this.initEvents();
  }

  hide() {
    $('body').toggleClass('is-sidedrawerHidden');
  }

  show() {
    const overlay = $(mui.overlay('on', { onclose: this.showClosed }));
    this.el.appendTo(overlay);
    setTimeout(this.activate, 20);
  }

  // Private

  initEvents() {
    this.titleEls.next().hide();
    this.titleEls.on('click', function() {
      $(this).next().slideToggle(200);
    });
    $('[data-js="show-sidedrawer"]').on('click', this.show);
    $('[data-js="hide-sidedrawer"]').on('click', this.hide);
  }

  showClosed() {
    this.el
      .removeClass('is-active')
      .appendTo(document.body);
  }

  activate() {
    this.el.addClass('is-active');
  }

}


$(() => Sidedrawer.instance = new Sidedrawer);
