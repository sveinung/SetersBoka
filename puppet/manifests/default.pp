group { 'puppet':
  ensure => present,
}

exec { 'apt-get update':
  command     => "/usr/bin/apt-get update",
  before      => Package['python-software-properties'],
}

package { 'python-software-properties':
  ensure => present,
}

file { '/etc/apt/sources.list.d':
  ensure => directory,
}

apt::ppa { 'ppa:chris-lea/node.js': 
  require => [Package['python-software-properties'], File['/etc/apt/sources.list.d']],
}

package { 'nodejs':
  ensure  => present,
  require => Apt::Ppa['ppa:chris-lea/node.js'],
}

