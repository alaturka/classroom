# Classroom Yöneticisi

Classroom Yöneticisi hakkında sorular.

[[toc]]

## "Terminal açmak" ne demek?  Hangi terminal?

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

## Classroom yöneticisinin sürümü soruluyor, ne cevap vereceğim?

Bir [Terminal açın](#terminal-acmak-ne-demek-hangi-terminal) ve aşağıdaki komutun çıktısını cevap olarak iletin:

```dos
classroom version
```

## Bendeki sürüm numarası arkadaşımda görünenden farklı çıkıyor?

Siz ve/veya arkadaşınız kullandığı Classroom yöneticisi güncel olmayabilir.  Her iki taraf da [güncelleme](#update)
yaparsa sürüm numaraları aynı olacaktır.

## Nasıl güncelleme yapacağım?

Bir [Terminal açın](#terminal-acmak-ne-demek-hangi-terminal) ve aşağıdaki komutu uygulayın:

```dos
classroom install
```

Güncelleme işleminin incelikleri hakkında [ilgili dokümanı](/intro/manager) okumayı unutmayın.
