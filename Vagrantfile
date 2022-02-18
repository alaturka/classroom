# frozen_string_literal: true

Vagrant.configure('2') do |config|
  config.vm.box = 'windows/classroom'

  config.vm.guest = :windows

  config.vm.provider 'virtualbox' do |virtualbox|
    virtualbox.customize ['modifyvm', :id, '--recording',         'on'                              ]
    virtualbox.customize ['modifyvm', :id, '--recordingvideores', '1920x1080'                       ]
    virtualbox.customize ['modifyvm', :id, '--recordingvideorate', '1620'                           ]
    virtualbox.customize ['modifyvm', :id, '--recordingfile',     './src/screencasts/classroom.webm']

    virtualbox.customize ['modifyvm', :id, '--audio',           'pulse']
    virtualbox.customize ['modifyvm', :id, '--audioin',         'on'   ]
    virtualbox.customize ['modifyvm', :id, '--audioout',        'on'   ]
    virtualbox.customize ['modifyvm', :id, '--audiocontroller', 'hda'  ]
  end
end
