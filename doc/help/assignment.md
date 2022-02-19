# Ödevler

Classroom ortamı üzerinde yürütülecek ödev etkinlikleri hakkında sorular.

[[toc]]

## Ödevleri Classroom ortamı üzerinden mi teslim etmeliyim?

Evet önerdiğimiz yöntem [bu](/guide/).  Öte yandan Classroom ortamının kurulumunda sorun yaşamışsanız veya bu ortamı
kurabileceğiniz yeterlilikte bir bilgisayara sahip değilseniz Github üzerinden sunulan ödevleri tarayıcı üzerinde de
yapabilirsiniz.  Fakat bu yöntemin çok verimsiz olacağını göz önünde bulundurun.  (Classroom ortamının kurulumunda sorun
yaşıyorsanız ilgili yardım sayfalarını [okumayı](/help/general/) ihmal etmeyin.)

Tarayıcı üzerinden yürütülen çalışmaları bir parça verimli kılmak için VS Code'un tarayıcı üzerinden kullanılmasına
olanak sağlayan [Github servisinden](https://github.dev) yararlanabilirsiniz.  İpucu: Kabul ettiğiniz ödev deposuna
tarayıcıda göz atarken `.` (nokta) tuşuna basın.

## Ödevi tarayıcı üzerinde yaparken değerlendirme sonuçlarını nasıl göreceğim?

Ödev deponuzda "Actions" sekmesine tıklayarak "Github Classroom Workflow" günlüklerine bakın.  Bu günlükler hangi
adımlarda başarısız olduğunuzu ayrıntılı hata iletileriyle birlikte görüntülemektedir.

## Classroom ortamı başarılı/başarısız olduğumu, Github ise tersini söylüyor?

Büyük bir ihtimalle Classroom çalışma ortamında bir hata buldunuz.  Çözülmesi için sorunu raporlayın.

## VS Code'da ödevi teslim edemiyorum, Git hata veriyor?

Sıklıkla karşılaşılan bir hata Git `user` ve `email` ayarlarının yapılmamış olmasından kaynaklanır.  Durum buysa **Windows
tarafında** bir terminal açarak aşağıdaki komutları girin:

```dos
git config --global user.name "<Ad Soyad>"
git config --global user.email "<Email>"
```

Karşılaştığınız hata bunların dışında bir durum ise sorunuzu öncelikle [ödev
forumuna](https://github.com/19/classroom/discussions/categories/%C3%B6dev) taşıyabilirsiniz.
