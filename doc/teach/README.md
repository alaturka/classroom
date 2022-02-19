# Çalışma akışı

Classroom ortamında programlama öğretiminde iş akışları.

## Ödevler

Github Classroom üzerinden sunulan programlama ödevleri nasıl hazırlandığı aşağıdaki video'da özetlenmiştir.  (**Tam
ekran izlemenizi öneririz.**)

<iframe width="560" height="315" src="https://www.youtube.com/embed/KlaNT07bWtk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Öğrencilerin bu şekilde sunulan ödevler üzerinde nasıl çalışacakları [ilgili kılavuz sayfalarında](/guide/)
anlatılmıştır.  Ödevler verilmeye başlanmadan önce öğrencileri bu kılavuzu baştan sona okumaya yönlendirmek çalışma
akışının sağlıklı yürümesi açısından gereklidir.

### Kurallar ve Konvansyonlar

Ödev hazırlarken Video'da düşülen notlarda da kısaca değinildiği gibi aşağıdaki hususlara özellikle dikkat edilmelidir.

1. Tercih edilen uygulama olarak her ders için dersin aktif olduğu süre içinde geçerli olan ve sonrasında arşivlenen
   özel bir Github organizasyonu kullanılır.  Video'da örnek olarak `19` isimli "meta" organizasyon kullanılmıştır. Ödev
   verilen ders için bu organizasyon değişecektir.  Aksi belirtilmediği sürece https://github.com/19 derslerde aktif
   olarak ödev verilen bir organizasyon değildir.

2. Her ders organizasyonunda adı konvansiyonel olarak `.` ile başlayan ve ödevlerde şablon olarak kullanılan depolar
   tanımlanabilir, ör. C programlama derslerinde `.c` şablon deposu.  Ödev sorularında eğer varsa ilgili programlama
   diline ait böyle bir şablonu kullanın.

3. Şablondan türetilen ödev deposunda adı çoğunlukla `assignment.<UZANTI>` veya `<DEPO-ADI>.<UZANTI>` olan ve öğrenciden
   ödev üzerinde çalışırken kodlaması istenen bir "ana kaynak kod" bulunmaktadır.  Bu konvansiyon sayesinde öğrencinin
   ödevi rastgele dosyalarla yapması önlenmektedir.  Ana kaynak kodda `Correct?` aşamasında kullanılabilecek örnek
   girdiler de bulunabilir.

4. Ödeve ait soru metni daima depo kökünde bulunan `README.md` dosyasına girilir.  Ödev metinlerini kısa, açık ve
   anlaşılır yazmak çok önemlidir.  Aksi halde öğrenciden çok fazla soru veya itiraz almanız kaçınılmazdır.  Bu konuya
   ayrıntılı şekilde değinilecektir.

5. Ödevleri sadece İngilizce küçük harf, rakam ve tire karakterlerinden oluşan basit isimler olarak oluşturun.  Türkçe
   karakter ve boşluk karakterlerinden özellikle kaçının.  Büyük harf kullanılmasını da önermiyoruz.

6. Github "autograding action"ında hali hazırda bulunan bir programlama hatasından dolayı test adlarında Türkçe karakter
   kesinlikle kullanmayın.  Boşluk veya noktalama işaretleri (en azından bir kısmını) kullanabilirsiniz.

7. Otomatik değerlendirme testlerinde basit olarak aşağıda özetlenen 3 adımı kullanıyoruz.  Bu şemanın dışına
   çıkabilirsiniz, fakat bu ödev değerlendirme karmaşıklığını arttırabileceğinden önermiyoruz.  Basit 3 adımlı
   değerlendirme Classroom çalışma ortamındaki betiklerle desteklenen "streamline" edilmiş bir yapı kurmaktadır.

   - `Valid?`: Ödev tesliminin gerek şartları sağlayıp sağlamadığını test eden en temel adım, ör. C ödevlerinde teslim
     edilen kodun başarıyla derlenebilmesi.  Bu adımda aşağıdaki komutu kullanıyoruz ("run"):

     ```sh
     .local/bin/exec lets okay
     ```

   - `Good?`: Ödev teslimindeki kodların stil kurallarına ve geçerli pratiklere uygunluğunu denetleyen adım, ör. C
     ödevlerinde kodun uyarı üretmeden derlenebilmesi ve biçiminin (girintiler vb) doğru olması.  Bu adımda aşağıdaki
     komutu kullanıyoruz ("run"):

     ```sh
     .local/bin/exec lets lint
     ```

   - `Correct?`: Ödev teslimindeki kodun soruda istenen tüm koşulları sağladığını yani doğru çalıştığını denetleyen
     adım, ör. C ödevlerinde derlenen programın istenen çıktıyı üretmesi.  Bu adımda aşağıdaki komutu kullanıyoruz
     ("run"):

     ```sh
     .local/bin/exec lets play
     ```

     Bu adımda diğer adımlardan farklı olarak programın standart girdi ve çıktısı sırasıyla `input` ve `output`
     alanlarında belirtilebilmektedir.  Program girdisini ödevde öğrenciden kodlanması beklenen ana kaynak koda gömmek
     daha pratik olabilir.  Bu nedenle `output` alanı `input` alanına göre daha fazla kullanılır.
