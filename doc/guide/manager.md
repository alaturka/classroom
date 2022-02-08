# Classroom yöneticisi

Classroom yöneticisinin kullanımı.

[Terminoloji bölümünde](./environment) açıklandığı gibi Classroom ortamında Windows ve Linux taraflarında kurulu olan
iki farklı "Classroom yöneticisi" vardır.  Bu iki yönetici, bazı farklılıklar bir yana bırakılacak olursa, benzer
anlamda kullanılan komutlara sahiptir.  Classroom yöneticileri ilgili ortamda açılan bir terminalde (Windows'da Windows
Terminal'i, Linux'da WSL terminali) aşağıdaki genel biçimde çalıştırılan komut satırı programlarıdır.

```sh
classroom [<seçenekler>] <komut> [<argümanlar/seçenekler>..]
```

Her iki taraf için de geçerli olan ortak seçenekler şunlardır:

- `-verbose`: İşlemler sırasında ayrıntılı bilgi görüntüle
- `-offline`: Otomatik yönetici yenilemesi davranışını her koşulda etkisizleştir
- `-online`: Otomatik yönetici yenilemesi davranışını olası her koşulda etkinleştir

## Windows

"Linux Classroom yöneticisi"nden farklı olarak "Windows Classroom yöneticisi" (veya basitçe "Classroom yöneticisi") ön
tanımlı olarak hem Windows hem de Linux tarafında etki gösterir.  Öte yandan komutların bazıları işlem yapılacak tarafın
seçilmesine de olanak tanır.  Her iki tarafı da yönetebilmesi nedeniyle Classroom yönetiminde genel olarak "Windows
Classroom yöneticisi"ni kullanmayı tercih edebilirsiniz.  "Windows Classroom yöneticisi"ne Windows Terminal'i açarak
erişebilirsiniz.

### Kurulum/Güncelleme

Classroom ortamını Windows ve Linux taraflarıyla bir bütün olarak güncellemek için kurulum adımını tekrar etmeniz
yeterlidir.

```dos
classroom install
```

Bu komut ön tanımlı olarak hem Windows hem de Linux tarafında etki gösterir. Sadece belirli bir tarafta işlem yapmak
için aşağıdaki örneklerden yararlanabilirsiniz.

- Sadece Windows ortamını tam güncelle:

  ```dos
  classroom install windows
  ```

- Sadece Linux ortamını tam güncelle:

  ```dos
  classroom install linux
  ```

### Yenileme

Classroom ortamını tam güncellemek yerine sadece Classroom yöneticisini güncelleyen işleme "yenileme" diyoruz.
Aşağıdaki komut her iki taraftaki yönetici programları "yeniler".

```dos
classroom renew
```

Komut ön tanımlı olarak hem Windows hem de Linux tarafında etki gösterir. Sadece belirli bir tarafta işlem yapmak için
aşağıdaki örneklerden yararlanabilirsiniz.

- Sadece "Windows Classroom yöneticisi"ni yenile:

  ```dos
  classroom renew windows
  ```

- Sadece "Linux Classroom yöneticisi"ni yenile:

  ```dos
  classroom renew linux
  ```

::: details
Daima son sürüm özelliklerle çalıştırmak amacıyla aşağıda listelenen komutlardan önce Classroom yöneticilerinin
yenilenmesi otomatik gerçekleşir.  Bu nedenle `renew` komutunu olağan bir senaryoda sık kullanmanız gerekmez.

- `install`
- `uninstall`
- `provision`

Bu davranışı kontrol etmek için `-offline` ve `-online` ortak seçeneklerini kullanabilirsiniz.
:::

### Provizyonlama

"Sistem Provizyonlama" terimi Windows'da bazı ilave özelliklerin etkinleştirilmesi, ayarların yapılması veya
yazılımların kurulması gibi eylemleri ifade eder.  "Classroom Yöneticisi" bu amaçla `provision` alt komutunu sunar.  Her
provizyonlama eylemi genel olarak `<isim/eylem>` formunda "rota"larla tanımlanır.  Aşağıdaki komut bu rotadaki bir
provizyonlama adımının nasıl gerçekleştirileceğini göstermektedir:

```dos
classroom provision <isim/eylem>
```

### Kaldırma

TODO: Yazılacak

```dos
classroom uninstall
```

### Sürüm görüntüleme

Özellikle hata bildirimlerinde yararlı olacak bir bilgi olarak "Classroom ortamı"yla ilgili sürüm bilgilerini öğrenmek
için bu komutu kullanıyoruz.

```dos
classroom version
```

Komut ön tanımlı olarak hem Windows hem de Linux tarafının sürüm numaralarını vermektedir.  Sadece belirli bir tarafta
işlem yapmak için aşağıdaki örneklerden yararlanabilirsiniz.

- Sadece Windows tarafının sürüm bilgisini görüntüle:

  ```dos
  classroom version windows
  ```

- Sadece Linux tarafının sürüm bilgisini görüntüle:

  ```dos
  classroom version linux
  ```

## Linux

"Linux Classroom yöneticisi"ne erişmek için Masaüstündeki "Classroom Terminali" kısayolunu çalıştırabilir veya Windows
terminalinde `wsl --distribution Classroom` yazarak Linux ortamına girebilirsiniz.

"Linux Classroom yöneticisi" sadece Linux tarafında etki gösterir.  Bu farka dikkat etmek kaydıyla bir önceki bölümde
"Windows Classroom yöneticisi" hakkında verilen bilgiler "Linux Classroom yöneticisi" için de geçerlidir.  Örneğin Linux
ortamının tam güncellemesi için Linux ortamı içindeyken `classroom install' komutunun girilmesi yeterlidir.
