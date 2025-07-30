const pdfNames = [
    "Et ve Sağlıklı Beslenme.pdf",
    "GASTRONOMİ AKIMLARINDA SAĞLIKLI MOR YİYECEKLER.pdf",
    "MEDYANIN SAĞLIKLI BESLENME DAVRANIŞI ÜZERİNDEKİ ETKİSİ.pdf",
    "Aile Desteği Çocukların Sağlıklı Yeme Öz Yeterliliğini Etkiler mi.pdf",
    "Amatör Futbolcuların Sağlıklı Beslenmeye İlişkin Tutumlarının İncelenmesi.pdf",
    "Biyoetik Bir Değer Olarak Gelişen Bir Beslenme Kültürü Sürdürülebilir Sağlıklı Beslenme.pdf",
    "Çevresel ve Sağlıklı Beslenme Sürdürülebilir Diyetler.pdf",
    "Çocuk Beslenmesi ve Sağlıklı Atıştırmalıklar.pdf",
    "Çocuklarda Sağlıklı Yeme ile İlgili Aile Desteği ve Sağlıklı Yeme Öz Yeterliği Arasındaki İlişki.pdf",
    "Çocukluk Çağı Akciğer Hastalıklarında Sağlıklı Beslenmenin Önemi.pdf",
    "Diyabetli Hastalarda Sağlıklı Beslenme ile İlgili Bilinç Düzeyi Değerlendirmesi.pdf",
    "EĞLENCELİ ÜRÜN KARARLARI VE ÇOCUKLARIN SAĞLIKLI YİYECEKLERE YÖNELİK TUTUMLARI KAVRAMSAL BİR ÇALIŞMA.pdf",
    "ERGENLİK ÖNCESİ SÜREÇTEKİ ÖĞRENCİLERİN BESLENME VE SAĞLIKLI YAŞAM BİÇİMLERİNE YÖNELİK TUTUMLARININ BELİRLENMESİ.pdf",
    "Fiziksel Aktivite ve Sağlıklı Beslenme ile Obeziteyi Önleme Ebeveyn ve Çocuk Yeme Algılarının Niteliksel Bir Çalışması.pdf",
    "FİZİKSEL AKTİVİTE VE SAĞLIKLI BESLENMENİN BİLİŞİM SEKTÖRÜNDE MASA BAŞINDA ÇALIŞANLARIN SAĞLIĞINA ETKİLERİNİN DERLENMESİ.pdf",
    "Gastrit ve Helicobacter pylori Tedavisinde Sağlıklı Beslenmenin Yeri ve Önemi.pdf",
    "GASTRONOMİ AKIMLARINDA SAĞLIKLI MOR YİYECEKLER.pdf",
    "GASTRONOMİ VE TURİZMDE SAĞLIKLI YİYECEK ÜRETİMİ.pdf",
    "Gastroturistlerin Sağlıklı Beslenme Alışkanlıklarının Tespiti Balıkesir Örneği.pdf",
    "Gebelerin Sağlıklı Beslenme Takıntısı (Ortoreksiya Nervoza) ve Yeme Tutumlarının Değerlendirilmesi.pdf",
    "GESTASYONEL DİYABET TANISI ALMIŞ GEBELERİN SAĞLIKLI YAŞAM BİÇİMİNE UYUMU.pdf",
    "GIDA ETİKETLERİNDE YER ALAN BİLGİLERİN SAĞLIKLI ALGILANMA ETKİSİ.pdf",
    "GLİSEMİK İNDEKS, GLİSEMİK YÜK,SAĞLIKLI BESLENME VE SPOR.pdf",
    "HELAL VE SAĞLIKLI ET VE ET ÜRÜNLERİ ÜRETİMİ.pdf",
    "İlk İki Yaşta Sağlıklı Beslenme ve Sağlıklı Beslenme Alışkanlığının Geliştirilmesi.pdf",
    "Kardiyovasküler Hastalıklarda Sağlıklı Beslenme Önerileri.pdf",
    "Kur’ân’da ve Hadislerde Sağlıklı Beslenme ve Obezite.pdf",
    "MEDYANIN SAĞLIKLI BESLENME DAVRANIŞI ÜZERİNDEKİ ETKİSİ.pdf",
    "Nörogastronomi ve sağlıklı besin seçimini geliştirme üzerindeki rolü.pdf",
    "OKUL ÖNCESİ ÇOCUKLARIN SAĞLIKLI BESİN VE AKTİVİTE SEÇİMLERİ İLE VÜCUT AĞIRLIĞI İLİŞKİSİ.pdf",
    "OPTİMUM BESLENMEDE SAĞLIKLI ATIŞTIRMALIKLARIN YERİ.pdf",
    "SAGLIKLI BESLENMEDE CEVİZ.pdf",
    "SAĞLIK PROFESYONELLERİNDE SAĞLIKLI BESLENME KAYGISI ORTOREKSİYA NERVOZA.pdf",
    "Sağlıklı Beslenme –Neleri Gözden Kaçırıyoruz.pdf",
    "Sağlıklı Beslenme Takıntısının Sosyolojik Bağlantıları.pdf",
    "Sağlıklı Beslenmede Akdeniz Diyetinin Rolü ve Sürdürülebilirliği.pdf",
    "SAĞLIKLI BESLENMEDE TÜRK MUTFAK KÜLTÜRÜNÜN YERİ.pdf",
    "Sağlıklı Erişkinlerde Beslenme Önerileri ve Danışmanlığı.pdf",
    "Sağlıklı Yaşam Biçimi Olarak Beslenme Reklamlara Tepkinin EEG ile Belirlenmesi.pdf",
    "Sağlıklı Yaşam Gündelik Hayatta Karşılaştığımız Sağlık Risklerini Azaltabilir Miyiz.pdf",
    "Spor Bilimleri Fakültesinde Öğrenim Gören Öğrencilerin Cinsiyetlerine Göre Sağlıklı Beslenme Tutumlarının İncelenmesi.pdf",
    "Üniversite öğrencilerinin beslenme okuryazarlığı durumu, etkileyen faktörler ve sağlıklı beslenme tutumu ile ilişkisi.pdf",
    "Üzümsü Meyveler Sağlıklı Beslenme Üzerine Etkileri.pdf",
    "Vejetaryen Olan ve Olmayan Bireylerin Sağlıklı Beslenmeye İlişkin Tutum ve Besin Etiketi Okuma Alışkanlıklarının Karşılaştırılması.pdf",
    "Yaşlılarda sağlıklı beslenme – sağlıklı su tüketimi.pdf",
    "Yaşlılık ve sağlıklı beslenme.pdf",
    "Yetişkin Bireylerde Sürdürülebilir ve Sağlıklı Yeme Davranışları ile E-Sağlıklı Beslenme Okuryazarlığı ve Beslenme Bilgi Düzeyi Arasındaki İlişkinin Değerlendirilmesi.pdf",
    "YETİŞKİNLERDE BESLENME OKURYAZARLIĞIN SAĞLIKLI BESLENMEYE İLİŞKİN TUTUMLAR VE BEDEN KÜTLE İNDEKSİ İLE İLİŞKİSİ.pdf",
    "Zamanında Doğmuş Sağlıklı Çocuklarda Tamamlayıcı Beslenme.pdf",
    "Zayıf Öğrencilere Yönelik Uygulanan Sağlıklı Beslenme Programının Etkisi.pdf",
    "YAŞAMA SAĞLIKLI BAŞLAMANIN BASAMAKLARI.pdf"
];

const articlesData = [];
for(let i=1; i<=pdfNames.length; i++) {
    const pdfFile = pdfNames[i-1];
    articlesData.push({
        id: i,
        img: `img/mk${i}.jpg`,
        title: pdfFile.replace(/\.pdf$/i, ""),
        desc: "",
        pdf: `pdf/${pdfFile}`
    });
}

const articlesPerPage = 21;
let filteredArticles = [...articlesData];

function displayArticles(page) {
    const articlesContainer = document.getElementById('articles');
    if (!articlesContainer) return;
    articlesContainer.innerHTML = '';

    const start = (page - 1) * articlesPerPage;
    const end = start + articlesPerPage;
    const pageArticles = filteredArticles.slice(start, end);

    pageArticles.forEach(article => {
        const item = document.createElement('article');
        item.innerHTML = `
            <img src="${article.img}" alt="${article.title}" class="article-img">
            <h3 class="article-title">${article.title}</h3>
            <a href="${article.pdf}" target="_blank">Devamını Oku</a>
        `;
        articlesContainer.appendChild(item);
    });
}

function setupPagination(totalArticles, currentPage) {
    let pagination = document.getElementById('pagination');
    if (!pagination) {
        pagination = document.createElement('div');
        pagination.id = 'pagination';
        pagination.style.textAlign = 'center';
        pagination.style.margin = '30px 0 10px 0';
        const articlesContainer = document.getElementById('articles');
        if (articlesContainer) articlesContainer.parentNode.appendChild(pagination);
    }
    pagination.innerHTML = '';
    const totalPages = Math.ceil(totalArticles / articlesPerPage);

    if (totalPages <= 1) return;

    if (currentPage > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.textContent = '« Önceki';
        prevBtn.onclick = () => goToPage(currentPage - 1);
        pagination.appendChild(prevBtn);
    }
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        if (i === currentPage) btn.classList.add('active');
        btn.onclick = () => goToPage(i);
        pagination.appendChild(btn);
    }
    if (currentPage < totalPages) {
        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Sonraki »';
        nextBtn.onclick = () => goToPage(currentPage + 1);
        pagination.appendChild(nextBtn);
    }
}

function goToPage(page) {
    displayArticles(page);
    setupPagination(filteredArticles.length, page);
}

document.addEventListener("DOMContentLoaded", function() {
    goToPage(1);

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const filter = this.value.trim().toLowerCase();
            filteredArticles = articlesData.filter(article =>
                article.title.toLowerCase().includes(filter)
            );
            goToPage(1);
        });
    }
});