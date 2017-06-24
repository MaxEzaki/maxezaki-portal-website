from fabric.api import local, run, cd, env
from fabric.contrib.project import rsync_project

def crowd():
    env.hosts = ['www335.sakura.ne.jp']
    env.user = 'maxezaki'


def deploy():
    with cd('/home/maxezaki/www/maxezaki.com'):
        run('git pull origin master')


