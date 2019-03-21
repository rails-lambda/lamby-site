
# Lamby Demo

DEPLOYED TO: https://lamby.metademo.net

<a href="https://github.com/customink/lamby"><img src="https://user-images.githubusercontent.com/2381/54278425-af365680-4568-11e9-972a-6b73e0a44bb5.jpg" alt="Lamby: Simple Rails & AWS Lambda Integration using Rack." align="right" /></a>Demo Rails app deployed to AWS Lambda using the [Lamby](https://github.com/customink/lamby) gem's Rack integration and documentation.

* Introductory Blog Post - [Rails on AWS Lambda with SAM](https://technology.customink.com/blog/2019/03/13/rails-on-aws-lambda-with-sam/)
* [Lamby GitHub Project](https://github.com/customink/lamby)


## History

This basic Rails app was created using the following commands

```shell
$ rails new hello_rails \
  --skip-active-record \
  --skip-action-mailer \
  --skip-active-storage \
  --skip-action-cable \
  --skip-spring \
  --skip-coffee \
  --skip-turbolinks \
  --skip-bootsnap
$ cd hello_rails
$ rbenv local 2.5.3
```
