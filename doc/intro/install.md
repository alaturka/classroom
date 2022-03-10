# Kurulum

Windows üzerinde Classroom ortamının kurulumu.

Programlamada kullanacağınız Linux tabanlı Classroom ortamının kurulum adımları aşağıda sunulmuştur.  Her adımda
açıklamaları dikkatli şekilde okuyarak verilen komutları terminale girmeniz gerekmektedir.  Komutları elle girmek yerine
fare imlecini metin kutusu üzerinde gezdirdiğinizde çıkan kopyalama butonuna tıklayarak komutu kopyalamanızı öneririz.

## Gereksinimler

Kurulum için sorunsuz bir ağ bağlantısı ve Powershell (sürüm 5) kurulu görece yeni **Windows 10** veya üstü (ör. Windows
11) bir sistem gerekir. Lütfen önce bu koşulları sağladığınıza emin olun.

::: danger
Tüm kurulumun olağan bir ağ bağlantısıyla bilgisayarınızın durumunuza bağlı olarak **yaklaşık yarım saat** sürmesini
bekleyebilirsiniz. Kurulum boyunca bir kaç GB'a varan veri indirileceğinden yavaş bir ağ bağlantısına sahipseniz bu süre
çok daha uzayabilir.
:::

::: tip
Kurulum öncesinde arka planda gerçekleşen otomatik Windows güncellemelerinin tamamlandığına emin olun.  Otomatik Windows
güncellemeleri kurulum sürecini çok yavaşlatabilir.
:::

## Kısıtlamalar

Komut satırında kullanılan bazı programların (ör. Scoop) hata üretmesinden dolayı Windows ev klasörü adının, dolayısıyla
Windows kullanıcı adının, ASCII olmayan karakterler (ör. `ığüşöçİĞÜŞÖÇ` gibi Türkçe karakterler) **içermemesi**
gerekiyor.  Örneğin Windows kurulumunda seçtiğiniz kullanıcı adı `Adem Öztürk` ise bu isim `C:\Users\Adem Öztürk` ev
klasörü adı üreteceğinden geçerli bir isim olmayacaktır.  Böyle bir sisteme sahipseniz önerimiz geçerli bir kullanıcı
adıyla yeni bir Windows kurulumu yapmaktır.

::: tip
Github hesap adları daima geçerli olduğundan Windows kullanıcı adını Github hesap adıyla eş yapmanızı öneririz.  Sorun
çıkarmamakla beraber kullanıcı adlarında boşluk karakteri kullanmamanızı da öneriyoruz.
:::

## Birinci Aşama: Önyükleme

"Powershell Terminali"ni <a class="popup" href="#">yönetici izniyle açarak<span><img class="gif" alt="powershell"
src="/images/powershell.gif"/></span></a> aşağıdaki kodu kopyala/yapıştır yapın:

```powershell
Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force;
iwr -useb https://get.classroom.alaturka.dev/classroom | iex
```

::: danger
Bu aşamada sorun yaşıyorsanız (gerekiyorsa farklı zamanlarda, farklı ağ ortamlarında bir kaç kez) **işlemi tekrar etmeyi
deneyin**.  Lütfen hata iletilerine bakarak eksik veya hatalı bir uygulamayı kurmaya çalışmayın.  Bu aşamanın hatasız
tamamlanması zorunludur.  Aksi halde bir sonraki aşamaya geçmeyin.  Hata hala devam ediyorsa ekran görüntüsü alarak
[sorunu bildirin](https://github.com/alaturka/windows/issues/new?template=bug.yml)
:::

::: warning
Bu aşama başarıyla sonuçlandığında bilgisayarı yeniden başlatma onayı istenecektir.  Bir sonraki aşamaya geçmeden önce
onay vererek **mutlaka bilgisayarınızı yeniden başlatın**.
:::

## İkinci Aşama: Kurulum

"Windows Terminali"ni <a class="popup" href="#">açarak<span><img class="gif" alt="windowsterminal"
src="/images/windowsterminal.gif"/></span></a> aşağıdaki kodu kopyala/yapıştır yapın:

::: danger
İletilerin düzgün görüntülenmesi için Windows'un öntanımlı "Komut Terminali" veya "Powershell Terminali" yerine ilk
aşamada kurulmuş olan "Windows Terminali" kullanın.
:::

```dos
classroom install
```

::: warning
Bu aşamada sorun yaşıyorsanız önce **işlemi tekrar etmeyi deneyin**, sorun hala devam ediyorsa ekran
görüntüsü alarak [sorunu bildirin](https://github.com/alaturka/windows/issues/new?template=bug.yml)
:::
