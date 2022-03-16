# Classroom Kurulumu

Kurulum hakkında sorular.

[[toc]]

## Birinci aşama kurulumu sıfırdan nasıl tekrar edebilirim?

Powershell yönetici terminalinde aşağıdaki komutu çalıştırın

```ps1
$Env:CLASSROOM_BOOTSTRAP_AFRESH="true"; $VerbosePreference='Continue'; Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force; iwr -useb https://get.classroom.alaturka.dev/classroom | iex
```

## Kurulumu tamamladım, fakat terminalde işlem yaptığımda şuna benzer bir hata alıyorum?

```ps1
& : The term 'C:\Users\...\apps\scoop\current\bin\scoop.ps1' is not recognized as the
name of a cmdlet, function, script file, or operable program. Check the spelling of the
name, or if a path was included, verify that the path is correct and try again.
...

    + CategoryInfo          : ObjectNotFound: (C:\Users\...\scoop.ps1:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
```

Birinci aşama kurulumda (farketmediğiniz) bir sorun yaşanmış olabilir.

- [Bu aşamayı tekrar etmeyi deneyin](/intro/install.html#birinci-asama-onyukleme)

- Sorun hala devam ediyorsa [birinci aşama kurulumu sıfırdan yapın](#birinci-asama-kurulumu-s%C4%B1f%C4%B1rdan-nas%C4%B1l-tekrar-edebilirim)

## Birinci aşama kurulumda aşağıdakine benzer bir hata alıyorum?

```ps1
iwr: Temel alınan bağlantı kapatıldı: Gönderme işleminde beklenmeyen hata oluştu.
...

    + CategoryInfo          : InvalidOperation: (System.Net.HttpWebRequest:HttpWebRequest) [Invoke-WebRequest], WebException
    + FullyQualifiedErrorId : WebCmdletWebResponseException,Microsoft.PowerShell.Commands.InvokeWebRequestCommand
```

Ağ bağlantınızda bir sorun var.  Olası nedenleri ve çözümleri şunlar olabilir:

- Geçici bir ağ kesintisi yaşıyorsunuz.  Aynı makinede ağ sorunu olmadığına emin olduğunuz bir anda tekrar deneyin.

- Bulunduğunuz ağ ortamında etkin olan güvenlik duvarı veya diğer kısıtlamalardan dolayı kurulum komutuyla gerçekleşen
  ağ trafiği engelleniyor.  Bir başka ağ ortamında kurulumu deneyin.

- Sisteminizde bir sorun var.  Yeni bir Windows kurulumu deneyebilirsiniz.

## Önerilen tüm çözüm yöntemlerini denedim, fakat kurulum bir türlü başarılı olmuyor?

Büyük bir olasılıkla Windows kurulumunuzda bir sorun var.  İlk kurulumu çok eski bir tarihte yapılmış Windows sistemleri
zaman içinde sorunlu ve hantal bir hale gelebiliyor.  Özellikle sistem ayarlarıyla sık sık oynadığınız veya farklı
kaynaklardan çeşitli programlar kurduğunuz sistemlerde bu sorunların ortaya çıkma ihtimali daha da yüksek.

Son çare olarak bilgisayarınıza güncel sürümlü yeni bir sistem kurulumu yapın ve sonrasında Classroom kurulumunu
(sağlıklı ağ koşullarına sahip bir ortamda) yeniden deneyin.
