# Classroom ortamı

Classroom çalışma ortamı ve özellikleri.

## Giriş

Classroom ortamı WSL yoluyla Windows üzerinde çalışan bir Linux dağıtımını içeren iki bileşenli bir yazılım
kolleksiyonudur.  Ortamda esas olan, yani sınıf çalışmasını yürüttüğünüz ortam Linux tarafıdır.  Windows tarafının bir
işlevi Linux tarafını desteklemek olmakla beraber çok önemli bir işlevi daha vardır: İş akışında görülen "kaynak kod
düzenleme" eylemleri (VS Code'un "[Uzaktan Düzenleme](https://code.visualstudio.com/docs/remote/remote-overview)"
özelliği sayesinde) **düzenlediğiniz dosya Linux tarafında olsa bile** daima Windows üzerinde kurulu olan VS Code ile
gerçekleşir.

::: warning
VS Code sadece Windows tarafında kurulur, Linux tarafında VS Code kurulu değildir.
:::

Bu dokümanlarda "**Classroom**" sözcüğünü bağlama göre değişen bir kaç farklı terkip içinde kullanıyoruz.  "Classroom
ortamı"nı anlamak için aşağıda özetlenen terminolojiye hakim olmamız gerekiyor.

- "**Classroom ortamı**" (veya "**Classroom çalışma ortamı**") terimi "Windows tarafı" ve "Linux tarafı" olarak
  adlandırılan iki bileşenden oluşan ortamın bütününü anlatıyor.

- "**Windows tarafı**", sınıf çalışmalarında kullanılmak üzere VS Code başta olmak üzere Windows'a kurulan bazı
  yazılımları ve bu tarafın yönetilmesi (ör. kurulum ve güncelleme yapılması) amacıyla Windows'a `classroom`
  adıyla kurulan bir komut satırı programı olan "**Windows Classroom yöneticisi**"ni anlatıyor.

- "**Linux tarafı**" kurulum sonrasında Windows üzerinde `C:\Classroom` klasöründe bulunan ve WSL'de `Classroom` adıyla
  görünen Ubuntu tabanlı dağıtımı ve bu tarafın yönetilmesi amacıyla Linux'a `classroom` adıyla kurulan bir komut satırı
  programı olan "**Linux Classroom yöneticisi**"ni anlatıyor.

- Burada geçen "dağıtım" terimi WSL terminolojisindeki anlamıyla ("distribution") kullanılmıştır ve gerçek anlamda bir
  dağıtım değildir.  Terimdeki bu nüansı unutmamak kaydıyla buna "**Classroom dağıtımı**" diyoruz. "Classroom
  dağıtımı"na kurulum sonrasında Masaüstünde "Classroom Terminal" kısayoluyla veya VS Code üzerinde "Classroom" adıyla
  erişebiliyorsunuz.

- "Windows tarafı" öncelikli olmakla birlikte kısmen "Linux tarafı"nı da yönetebilen "Windows Classroom yöneticisi"ne,
  terim karışıklığa yol açmayacaksa, kısaca  "**Classroom yöneticisi**" diyoruz.  Her iki tarafın yönetici programlarını
  anlatmak için "**Classroom yöneticileri** terimini kullanıyoruz.  Classroom yöneticilerinin kullanımı [ilgili
  dokümanda](./manager) özetlenmiştir.

- Github üzerinde programlama alıştırmaları ("assignments") yayınlayan ve gönderdiğiniz çözümleri değerlendiren sınıf
  ortamı.  Terimi bu anlamda "**Github Classroom**" biçiminde kullanıyoruz.

## Özellikler

"Classroom ortamı"nın göze çarpabilecek temel özellikleri aşağıda sunulmuştur.

### Windows

- 2 adımlı "idempotent" (tekrar tekrar çalıştırılabilir) kurulum/güncelleme yapan ve **otomatik yenilenen** "Classroom
  yöneticisi"

- Çok dilli (şimdilik İngilizce ve Türkçe)

- Terminal'de tam UTF-8 desteği

- Öntanımlı olarak [WSL1](https://docs.microsoft.com/en-us/windows/wsl/),
  [WSL2](https://docs.microsoft.com/en-us/windows/wsl/compare-versions) desteği hazır

- [Scoop](https://scoop.sh) ile paket yönetimi

- [Git](https://git-scm.com/) kurulu

- [VS Code](https://code.visualstudio.com/) desteklenen programlama dilleri için yararlı eklentilerle ve Github
  Classroom entegrasyonuyla kurulu

- [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701) kurulu (Windows 10 için; Windows
  11'de zaten kurulu geliyor)

- Windows Terminal'de [Cascadia Font](https://github.com/microsoft/cascadia-code) ayarlı

- İsteğe bağlı ilave kurulum ve yapılandırmaları gerçekleştiren provizyonlama betikleri

::: warning
Windows tarafında kurulan Git yazılımını Linux tarafında da hazır kurulu olan Git yazılımıyla karıştırmayın.  Kaynak kod
düzenlemeleri (önerilen kullanım senaryosunda) Windows tarafındaki VS Code ile gerçekleştiğinden, pratikte
kullanacağınız Git **Windows tarafına kurulan** ve VS Code'da etkin olan Git yazılımıdır.
:::

### Linux

- 2 adımlı "idempotent" (tekrar tekrar çalıştırılabilir) kurulum/güncelleme yapan ve **otomatik yenilenen** "Classroom
  yöneticisi"

- [Ubuntu Bulutundaki](https://cloud-images.ubuntu.com/) en güncel Ubuntu WSL imajına dayalı taban dağıtım

- Sistem geneli hazır yapılandırılmış Tmux üzerinde Bash kabuğu ("login shell" Tmux)

- Öntanımlı olarak kurulan ve yapılandırılan programlama dilleri ve çalışma zamanı ortamları

  * C (GCC ve TCC)

  * Python (Python 3 ve Pip3 paket yöneticisi)

  * Ruby (Bundler hazır)

  * Javascript (Node.js 17.x sürümü)

  * Typescript

  * SQLite3 veritabanı (LiteCLI hazır)

- İsteğe bağlı ilave kurulum ve yapılandırmalar gerçekleştiren provizyonlama betikleri

- Sınıf çalışmalarında ve "Github workflow"larda kullanılabilecek LFH ("Local File Hierarchy") standardına uygun görev
  betikleri
