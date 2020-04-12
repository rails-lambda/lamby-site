FROM lambci/lambda:build-ruby2.7

# Lock down AWS SAM version.
RUN pip install awscli && \
    pip uninstall --yes aws-sam-cli && \
    pip install aws-sam-cli==0.47.0

# Node for JavaScript.
RUN curl -sL https://rpm.nodesource.com/setup_12.x | bash - && \
    yum install -y nodejs

WORKDIR /var/task
