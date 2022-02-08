# Kurulum

Windows üzerinde Classroom ortamının kurulumu.

Programlamada kullanacağınız Linux tabanlı Classroom ortamının kurulum adımları aşağıda sunulmuştur.  Her adımda
açıklamaları dikkatli şekilde okuyarak verilen komutları terminale girmeniz gerekmektedir.  Komutları elle girmek yerine
fare imlecini metin kutusu üzerinde gezdirdiğinizde çıkan kopyalama butonuna tıklayarak komutu kopyalamanızı öneririz.

## Gereksinimler

Kurulum için sorunsuz bir ağ bağlantısı ve Powershell (sürüm 5) kurulu görece yeni **Windows 10** veya üstü (ör. Windows
11) bir sistem gerekir. Lütfen önce bu koşulları sağladığınıza emin olun.

::: danger
Kurulum boyunca 2 GB'a varan veri indirileceğinden yavaş bir ağ bağlantısına sahipseniz kurulum uzun sürecektir.  Her
adımda sabırla beklemelisiniz.
:::

::: tip
Kurulum öncesinde arka planda gerçekleşen otomatik Windows güncellemelerinin tamamlandığına emin olun.  Otomatik Windows
güncellemeleri kurulum sürecini çok yavaşlatabilir.
:::

## Birinci Aşama: Önyükleme

"Powershell Terminali"ni <a class="popup" href="#">yönetici izniyle açarak<span><img class="gif" alt="powershell"
src="/images/powershell.gif"/></span></a> aşağıdaki kodu kopyala/yapıştır yapın:

```powershell
Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force;
iwr -useb https://get.alaturka.dev/classroom | iex
```

::: danger
Bu aşama başarıyla sonuçlandığında bilgisayarı yeniden başlatma onayı istenecektir.  Bir sonraki aşamaya geçmeden önce
onay vererek **mutlaka bilgisayarınızı yeniden başlatın**.
:::

::: warning
Bu aşamada sorun yaşıyorsanız önce **işlemi tekrar etmeyi deneyin**, sorun hala devam ediyorsa ekran görüntüsü alarak
[sorunu bildirin](https://github.com/alaturka/windows/issues/new?template=bug.yml).  Bu aşamanın hatasız tamamlanması
zorunludur.  Aksi halde bir sonraki aşamaya geçmeyin.
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
