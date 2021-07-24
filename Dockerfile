FROM public.ecr.aws/sam/build-ruby2.7:1.27.2

# Node for JavaScript.
RUN curl -sL https://rpm.nodesource.com/setup_12.x | bash - && \
    yum install -y nodejs

WORKDIR /var/task
