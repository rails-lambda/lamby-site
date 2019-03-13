
# Lamby Demo

DEPLOYED TO: https://lamby.metademo.net

Demo Rails app deployed to AWS Lambda using the [Lamby](https://github.com/customink/lamby) gem's Rack integration and documentation.

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
