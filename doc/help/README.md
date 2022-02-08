# Yardım

Classroom ortamı hakkında sıkça sorulabilecek sorular ve cevapları.

Sorular konusuna göre aşağıda gruplanmıştır.  Bu gruplar içinde dolaşabilir veya arama kutusuna soruyla ilgili bir kaç
anahtar kelime yazarak arama yaptırabilirsiniz.  Cevabını aradığınız bir soruyu burada bulamıyorsanız lütfen [tartışma
forumuna](https://github.com/alaturka/classroom./discussions) yazın.

[[toc]]

## Genel konular

Classroom Ortamı hakkında genel sorular.

### Bu bir WSL kurulumu gibi görünüyor, başka yöntemlerle (ör. Uygulama Mağazası yoluyla) yapsak?

Bu ortamın öncelikli amacı programlama deneyimi olmayan ve ağırlıklı olarak Windows kullandığını varsaydığımız yeni
öğrencilerin kullanıma hazır ve sağlıklı bir ortamda programlama öğrenmeye başlamasını sağlamak.  Bu tanıma uymuyorsanız
(WSL ve Linux deneyiminiz yeterliyse) neden olmasın?  Yalnız yapılanın "basitçe bir WSL kurulumu"nun ötesinde
[özellikler](/guide/environment) taşıdığını not edin.  Uygulama Mağazasından kuracağınız dağıtımı (ki muhtemelen eski
bir LTS sürümü olacak) düzgün şekilde provizyonlamayı unutmayın.

### Böyle Windows üzerinde uğraşmak yerine bilgisayarımıza doğrudan Linux kurup çalışsak?

Bunu yapmanızı hararetle tavsiye ediyoruz.  Fakat deneyiminiz yeterli düzeyde değilse, programlama öğrenmeye
başladığınız ilk zamanlarda ilave bir bilişsel yük alacağınızı göz önünde bulundurun.  Bu çalışma ortamını pragmatik bir
ilk adım olarak düşünebilirsiniz.

### Bilgisayarımda zaten Linux kurulu, bu sistemin bir benzerini bunun üzerine kurabilir miyim?

Güncel Ubuntu tabanlı bir dağıtım kullanıyorsanız bu gayet mümkün.  Tek yapmanız gereken [ilgili kurulum
dokümanındaki](/todo) talimatları izlemek.

### (Yasal olmayan kopyalarla) Windows üzerinde çalışmayı özendirmiyor musunuz?

Hayır.  Bilakis öğrencilere yeterli deneyimi kazanır kazanmaz doğal bir Linux ortamına geçiş yapmalarını tavsiye
ediyoruz.  Bu ortamı kullanırken de daima lisanslı bir Windows kopyasıyla çalışmalarını salık veriyoruz.

### Programlamayı öğrenmek için Windows zaten yeterli değil mi?  Sadece Windows kullansak?

Maalesef hayır.  Windows son kullanıcı için kolay ve yaygın kullanılan bir masaüstü ortamı sunuyor olabilir.  Fakat
birincil geliştirme ortamı olarak programcı dostu bir ortam sunduğunu söylemeyiz (ör. POSIX uyumsuzluğu, birinci sınıf
bir terminal ortamının yokluğu, kısmî UTF-8 sorunları vs).

### Bu ortamda çalışmak için önerdiğiniz bir yol var mı?

Olağan senaryoda öğrencilerin kaynak kod dosyalarını, dosya Linux tarafında olsa bile, VS Code'da açacaklarını ve yine
VS Code'dan ayrılmadan bir Classroom terminali açarak çalışacaklarını öngörüyoruz.  Zaman zaman VS Code dışına çıkarak
Masaüstünde bulacakları "Classroom Terminal" kısayoluyla bağımsız bir WSL konsolu açmaları, hatta deneyim kazandıkça
dosyaları Linux üzerinde kuracaklari editörlerle düzenlemeleri de mümkün, ama olağan senaryonun dışında.

### Classroom dağıtımında Java veya C# yok, neden?

Bu programlama dillerini Classroom imajını çok fazla şişireceğinden ön tanımlı olarak kurmuyoruz ama ilgili
provizyonlama desteği ortamda hazır bulunuyor.

## Sorun bildirimleri

Yaşadığınız sorunların bildirimi hakkında sorular.

### Kurulum hata verdi, ne yapmalıyım?

[Kurulum sayfasında](/guide/install) da vurgulandığı gibi öncelikle ilgili adımı (gerekirse bir kaç kez) tekrar edin;
geçici bir ağ veya kaynak sorunu yaşıyor olabilirsiniz.  Hata ısrarla devam ediyorsa sorunu [**önerdiğimiz biçimde**
bildirin](#nas%C4%B1l-sorun-bildirmeliyim).  Bazı durumlarda kurulumu kaldırıp yeni baştan yapmak da sorunu çözebilir
(bk. sonraki sorular), ama bunu yapmadan önce yine de sorunu bildirmenizde yarar var.

Lütfen sorunları bizlere özel yazışmalarla veya (birlikte çalıştığımız bir öğrenci grubunda iseniz) yüz yüze bildirmeye
çalışmayın.  Böyle yapsanız dahi sizi [doğru sorun bildirimi yöntemine](#bug) yönlendireceğiz ve arada gerçekleşen
iletişim zaman kaybından başka bir şey olmayacak.

### Nasıl sorun bildirmeliyim?

Öncelikle yaşadığınız sorunla aynı veya benzer bir hata bildirimi olup olmadığını [kontrol
edin](https://github.com/alaturka/windows/issues).  Şayet böyle bir hata kaydı varsa sorun çözülünceye kadar bekleyin.
Sorunun çözümünde yararlı olacağını düşündüğünüz bir bilgi varsa bunu ilgili hata kaydının altındaki yorumlarda
paylaşabilirsiniz.

Sorunun farklı ve yeni bir durum olduğunu düşünüyorsanız **mutlaka** ekran görüntüsü alarak [yeni bir hata kaydı
açın](https://github.com/alaturka/windows/issues/new?template=bug.yml).  Bunu yaparken bildirim şablonunda sizden
istenen bilgileri doğru şekilde girmeyi unutmayın.

### Sorunu düzeltmem için güncelleme yapmam istendi, nasıl yapacağım?

Classrom yöneticisi ilk çalıştığında kendi kopyasını güncellemektedir.  Özel bir komut uygulamanız talep edilmemişse
bir [Terminal açarak](/todo) basitçe aşağıdaki komutu uygulamanız yeterli.

```dos
classroom install
```

### Sorun değil de kullanımla ilgili bir "sorum" var, ne yapmalıyım?

Classroom ortamının kullanımıyla ilgili bir zorluk yaşamışsanız, yani yaşadığınız problemin Classroom ortamına ait bir
hata olduğundan kuşkuluysanız [Tartışma forumuna](https://github.com/alaturka/classroom./discussions) yazın.

## Classroom Yöneticisi

Classroom Yöneticisi hakkında sorular.

### "Terminal açmak" ne demek?  Hangi terminal?

Güncelleme yapmak veya bir hatayı düzeltmek için Classroom yöneticisini çalıştırmanız istendiğinde "bir Terminal açarak
şu komutu yazın" talebiyle karşılaşabilirsiniz.  Bu aşamada bir kafa karışıklığı yaşamanız normal çünkü Windows'da bir
kaç terminal var:

1. Ön tanımlı komut terminali ("Çalıştır" veya "Ara" kutusuna `cmd` yazarak eriştiğiniz terminal)

2. Powershell Terminal

3. Windows Terminal

4. Classroom Terminal (Başarılı bir kurulumda Masaüstünde bulacağınız kısayol)

Soruda geçen anlamıyla kastettiğimiz terminal 3'ncüsü, yani [Windows Terminal](/images/windowsterminal.gif) oluyor.
Diğer terminallerden "Powershell Terminal"i sadece kurulumun ilk aşamasında kullanıyoruz.  "Classroom Terminal"i
(4'ncü) ise "Classroom dağıtımı"na girmek için kullanıyoruz.  Bunu kullanmanız istendiğinde "bir Terminal aç" yerine
"Classroom Terminali aç" ifadesi kullanılacaktır.

### Classroom yöneticisinin sürümü soruluyor, ne cevap vereceğim?

Bir [Terminal açın](#terminal-acmak-ne-demek-hangi-terminal) ve aşağıdaki komutun çıktısını cevap olarak iletin:

```dos
classroom version
```

### Bendeki sürüm numarası arkadaşımda görünenden farklı çıkıyor?

Siz ve/veya arkadaşınız kullandığı Classroom yöneticisi güncel olmayabilir.  Her iki taraf da [güncelleme](#update)
yaparsa sürüm numaraları aynı olacaktır.

### Nasıl güncelleme yapacağım?

Bir [Terminal açın](#terminal-acmak-ne-demek-hangi-terminal) ve aşağıdaki komutu uygulayın:

```dos
classroom install
```

Güncelleme işleminin incelikleri hakkında [ilgili dokümanı](/guide/manager) okumayı unutmayın.
