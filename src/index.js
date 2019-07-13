// document.getElementById("sign-in-form").addEventListener("submit", (e) =>{
//     e.preventDefault();
//     console.log("submited");
// })
import riot from 'riot';
import "../src/tags/signup.tag";
import { mxFirebase } from './mx';
import route from "riot-route";
import "./tags/signin.tag"
import "./tags/hotel.tag"
import "./tags/tour.tag"
import "./tags/place.tag"
import "./tags/homepage.tag"
import "./tags/cuisine.tag"
import "../src/index.css"

let cities = {
    hanoi: {
        places: [
            {
                name: "Hồ Hoàn kiếm",
                address: "Hàng Trống, Hoàn Kiếm, Hà Nội,",
                activities: "Ăn uống, xem những buổi biểu diễn nghệ thuật, Chơi các trò chơi dân gian, xem bắn pháo hoa",
                photos: ["https://vntrip.cdn.vccloud.vn/cam-nang/wp-content/uploads/2017/07/ho-hoan-kiem-1.png", "http://baobinhluan.com/uploads/news/2018_12/doan-xiec-bieu-dien-tren-pho-di-bo-20-15437424553251476806562.jpg", "http://f.imgs.vietnamnet.vn/2018/02/01/09/ha-noi-chot-cac-diem-ban-phao-hoa-dem-giao-thua.jpg"]
            },
            {
                name: "Lăng Bác Hồ",
                address: "2 Hùng Vương, Điện Bàn, Ba Đình, Hà Nội,",
                activities: "Đến với nơi an nghỉ cuối cùng của vị lãnh tụ vĩ đại nhất Việt Nam, 5h sáng có thể xem lễ thượng cờ, 21h có thể xem lễ hạ cờ",
                photos: ["https://nemtv.vn/wp-content/uploads/2019/03/lang-bac-ho-nemtv-1.jpg", "https://img2.infonet.vn/w490/Uploaded/2019/coy_fexqkx/2019_04_17/le_thuong_co_o_lang_bac.jpg", "https://i.ytimg.com/vi/C0xHp0wvwro/maxresdefault.jpg"]
            },
            {
                name: "Công viên Thủ Lệ",
                address: "Ngọc Khánh, Ba Đình, Hà Nội",
                activities: "Tham quan vườn bách thú, Chơi nhiều trò chơi thú vị: nhà gương, đu quay,..., tham gia những hội sách lớn nhất tại đây",
                photo: ["https://nemtv.vn/wp-content/uploads/2019/01/cong-vien-thu-le-ha-noi-4.jpg", "https://nemtv.vn/wp-content/uploads/2019/01/cong-vien-thu-le-ha-noi-4.jpg", "https://nemtv.vn/wp-content/uploads/2019/01/cong-vien-thu-le-ha-noi-4.jpg"]
            },
            {
                name: "Công viên nước Hồ Tây",
                address: "614 Lạc Long Quân, Nhật Tân, Tây Hồ, Hà Nội",
                activities: "Chơi các trò chơi cảm giác mạnh, vui chơi thỏa thích tại công viên nước,",
                photo: ["http://thoibaonganhang.vn/stores/news_dataimages/thanhlm/042017/25/15/6d819859ca804317bb214c4e43b499a3_Untitled.jpg", "https://bizweb.dktcdn.net/100/101/075/files/cv-dad2e1a6-8c64-4466-86fd-9b454d1e1871.jpg?v=1555754004388", "http://vivuhanoi.com/wp-content/uploads/2016/04/cong-vien-nuoc-ho-tay.jpg"]
            },
            {
                name: "Royal city",
                address: "Ngõ 72 - Nguyễn Trãi, Thượng Đình, Thanh Xuân, Hà Nội",
                activities: "Thiên đường mua sắm, vui chơi cho trẻ em, thưởng thức những món ăn tại tuyến phố đồ ăn, vui chơi tại quảng trường rộng lớn",
                photo: ["https://pix10.agoda.net/hotelImages/572/572327/572327_16060809370043261830.jpg?s=1024x768", "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/Royal-city/tong-hop-nhung-kinh-nghiem-di-choi-royal-city-ha-noi-2.jpg", "http://tiniworld.com/wp-content/uploads/2016/12/nha_banh_tai_tiNiWord_Vincom_Hai_Phong.jpg", "https://www.marrybaby.vn/wp-content/uploads/2014/06/14/khu-vui-choi-vincom-mega-mall-royal-city.jpg"]
            },
        ],
        tours: [
            {
                name: "Thesinhtourist",
                startDate: "Hàng ngày",
                transport: "ô tô",
                startPlace: "Hà Nội",
                long: "1 ngày",
                accomodation: "Không có",
                hotline: "097 110 9999 - 094 301 8888",
                description: "Mọi người sẽ đc đi hầu hêt là những địa điểm nổi tiếng của Hà Nội, thưởng thức những món an truyền thống",
                price: "650.000",
                photos: ["https://vntrip.cdn.vccloud.vn/cam-nang/wp-content/uploads/2017/08/lang-bac.jpg", "https://nemtv.vn/wp-content/uploads/2019/01/chua-mot-cot-ha-noi-ha-noi.jpg", "https://www.dkn.tv/wp-content/uploads/2018/11/van-mieu-quoctugiam.jpg", "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/ho-hoan-kiem/Gioi-thieu-doi-net-ve-Ho-Hoan-Kiem-Ho-Guom-o-Ha-Noi-3.jpg"]
            },
            {
                name: "VietNamtravel",
                startDate: "Thứ 6 hàng tuần",
                transport: "ô tô",
                startPlace: "Hà Nội",
                long: "1 ngày",
                accomodation: "Không có",
                hotline: "0912 179 357",
                description: "Đi tham quan Cầu Long Biên, Chùa Trần Quốc, Hoàng Thành Thăng Long, Hồ Hoàn Kiếm, Phố cổ Hà Nội",
                price: "1.200.000",
                photos: ["https://images.foody.vn/res/g20/193450/prof/s576x330/foody-mobile-cau-lb-jpg-681-635852703061758540.jpg", "http://image.baophapluat.vn/w800/Uploaded/2019/feryxqdrei/2017_01_29/chua_tran_quoc_anh_quyet_thang_zqsm.jpg", "http://diendan.fall.vn/stores/news_dataimages/vananh/112018/30/23/231143baoxaydung_image001.jpg", "https://vntrip.cdn.vccloud.vn/cam-nang/wp-content/uploads/2017/07/ho-hoan-kiem-1.png", "https://www.vietfuntravel.com.vn/image/data/Ha-Noi/pho-co-ha-noi/Gioi-thieu-ve-pho-co-Ha-Noi-03.jpg"]
            },
            {
                name: "Sinhcafetourhanoi",
                startDate: "Hàng ngày",
                transport: "ô tô",
                startPlace: "Hà Nội",
                long: "1 ngày",
                accomodation: "Không có",
                hotline: "0948 233 633",
                description: "Thăng Long – Hà Nội là nơi hội tụ văn hóa, kết tinh những giá trị truyền thống của dân tộc- có quá trình hình thành lịch sử lâu dài, nhiều công trình văn hóa kiến trúc, di tích lịch sử nổi tiếng. Mọi người sẽ được tham quan Lăng Bác, Hồ Gươm, Chùa 1 cột",
                price: "500.000",
                photos: ["https://media.laodong.vn/storage/newsportal/2017/11/21/577368/Ho-Guom.jpg", "https://image.baonghean.vn/w800/Uploaded/2019/btgazsotunzm/2018_04_04/langbac1397108_442018.jpg", "https://vtv1.mediacdn.vn/thumb_w/650/Uploaded/admin/Du%20lich/yeudulich_chuamotcot1.jpg"]
            },
            {
                name: "Vietfuntravel",
                startDate: "Hàng ngày",
                transport: "ô tô",
                startPlace: "Hà Nội",
                long: "1 ngày",
                accomodation: "Không có",
                hotline: "1900 6749",
                description: "Qúy khách sẽ được tham quan Viện bảo tàng - Nhà sàn chủ tịch HCM, Chùa 1 cột, Đền Ngọc Sơn, Văn Miếu - Quốc Tử Gíam",
                price: "800.000",
                photos: ["https://congthuong.vn/stores/news_dataimages/thanhhuong/102016/06/10/746a715db981fa1b15631305183ef9b1__nh_BTHCM.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/14/61/62/de/chua-m-t-c-t-one-pillar.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/NNU_%C4%91%E1%BB%81n_Ng%E1%BB%8Dc_S%C6%A1n.jpg/250px-NNU_%C4%91%E1%BB%81n_Ng%E1%BB%8Dc_S%C6%A1n.jpg", "https://images.foody.vn/res/g18/179206/prof/s576x330/foody-mobile-van-mieu2-jpg-726-635815370221891382.jpg"]
            },
        ],
        hotels: [
            {
                name: "Hotel Golden Lotus Luxury",
                price: "1.493.100",
                address: "53-55 Hàng Trống, Hoàn Kiếm, Hà Nội",
                hotline: "+84 24 3828 5888",
                description: "Gần trung tâm thành phố, dễ dàng để đi mua sắm, phòng sạch sẽ tiêu chuẩn 4 sao",
                photos: ["https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805/partnerimages/29/27/292778398.jpeg", "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805/partnerimages/29/27/292778442.jpeg", "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805/partnerimages/29/27/292778434.jpeg"]
            },
            {
                name: "The Hanoi Club & Lake Palais Residences",
                price: "1.781.600",
                address: "76 Phố Yên Phụ, Yên Phụ, Tây Hồ, Hà Nội",
                hotline: "+84 24 3823 8115",
                description: "Phòng ốc sạch sẽ, đầy đủ vật dụng thiết yếu, dịch vụ tốt, có hồ bơi",
                photos: ["https://lh5.googleusercontent.com/p/AF1QipPUklJmsgrDiYYnlq1Af0bmuH6HnsGqmgfxssU=w408-h271-k-no", "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805/uploadimages/16/13/16130714.jpeg", "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805/partnerimages/32/29/322959898.jpeg", "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805/partnerimages/32/29/322959904.jpeg"]
            },
            {
                name: "Hotel Quoc Hoa",
                price: "1.201.700",
                address: "10 Bát Đàn, Hàng Bồ, Hoàn Kiếm, Hà Nội",
                hotline: "+84 24 3828 4528",
                description: "Gần với trung tâm Hà Nội, wifi tốt, đạt tiêu chuẩn 4 sao, phòng sạch sẽ, gọn gàng, dịch vụ tốt, có phòng tập gym",
                photos: ["https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805/partnerimages/70/91/70915450.jpeg", "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805/partnerimages/70/91/70915516.jpeg", "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/81/96/819671_v1.jpeg"]
            },
            {
                name: "Hotel Hanoi Tirant",
                price: "1.622.500",
                address: "38 Phố Gia Ngư, Hàng Bạc, Hoàn Kiếm, Hà Nội, Việt Nam",
                hotline: "+84 24 6265 5999",
                description: "Dịch vụ xuất sắc, có bể bơi, phòng spa, wifi chất lượng tốt, đạt tiêu chuẩn 4 sao",
                photos: ["https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/16/73/1673679_v3.jpeg", "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805/uploadimages/24/59/24591360.jpeg", "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805/uploadimages/24/59/24591326.jpeg", "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_470,q_auto,w_805/partnerimages/33/32/333268288.jpeg"]
            },
        ],
        cuisines: [
            {
                name: "Bún chả",
                address: "Bún chả Hương Liên tại 24 Lê Văn Hưu, quận Hai Bà Trưng, Hà Nội, Bún chả Cửa Đông tại 41 Cửa Đông, quận Hoàn Kiếm, Hà Nội,Bún chả 34 Hàng Than, quận Ba Đình, Hà Nội",
                price: "100000 - 200000",
                photos: ["https://s3-ap-southeast-1.amazonaws.com/mytour-static-file/upload_images/Image/Location/12_7_2016/11/an-gi-du-lich-ha-noi-mytour-7.jpg", "https://media.cooky.vn/recipe/g1/6361/s800x500/recipe-cover-r6361.jpg"]
            },
            {
                name: "Phở",
                address: "Phở gia truyền số 49 Bát Đàn, Phở Thìn 13 Lò Đúc",
                price: "100000 - 200000",
                photos: ["https://www.tripi.vn/blog/wp-content/uploads/2018/02/Ph%E1%BB%9F-Vui-768x402.png", "https://www.vntrip.vn/cam-nang/wp-content/uploads/2017/08/pho-bo.jpg", "http://ttol.vietnamnetjsc.vn//2016/11/14/06/47/pho-lo-duc-tu-diem-cua-vo-van-mon-an-ngon-thuong-hieu-cua-ha-noi_4.jpg"]
            },
            {
                name: "Bánh xèo",
                address: "Bánh xèo số 29, phố Tôn Đức Thắng, Quán bánh xèo 167 quán",
                price: "100000 - 200000",
                photos: ["https://www.chudu24.com/wp-content/uploads/2018/07/17265785_1833244843581858_5501201087190794240_n.jpg", "http://khoi.nghiep.vn/wp-content/uploads/2016/09/mo-quan-banh-xeo-can-chuan-bi-nhung-gi-1.jpg", "https://kenh14cdn.com/2016/img-5335-1471489324956.jpg"]
            },
            {
                name: "Bún đậu mắm tôm",
                address: "Quán bún đậu mắm tôm số 9 Bà Triệu, Bún đậu Nghĩa Tân 104 c3 Nghĩa Tân",
                price: "100000 - 200000",
                photos: ["https://wikiohana.net/wp-content/uploads/2019/01/bun-dau-mam-tom.jpg", "http://danhsachvang.net/upload/hinhanh/chitiet/hinhgoc/81/danh-sach-cac-quan-bun-dau-mam-tom-ngon-va-chat-luong-nhat-thanh-hoa-29869-4-0.jpg", "https://cdn.tgdd.vn/Files/2018/07/21/1103135/cach-lam-bun-dau-mam-tom-ngon-ngat-ngay-an-mot-lan-la-ghien.jpg"]
            },
        ]
    }
}
route.base("/");

route("/signup", () => {
    const signup = riot.mount("div#root", "signup");
    document.getElementById("form").addEventListener("submit", async (e) => {
        e.preventDefault()
        const email = document.getElementById("ema").value
        const password = document.getElementById("pas").value
        const passwordConfirm = document.getElementById("con").value
        if (password === passwordConfirm) {
            alert("password accepted")
            try {
                await mxFirebase.signUp(email, password)
                window.location.href = "/signin"
            } catch (err) {
                document.getElementById("err-message").innerText = err.message
            }
        } else {
            document.getElementById("err-message").innerText = "Confirm password must match"
        }

    })
})

route("/place", () => {
    let opts = {
        city: cities.hanoi
    }
    riot.mount("div#root", "place",opts)
})
route("/cuisine", () => {
    let opts = {
        city: cities.hanoi
    }
    riot.mount("div#root", "cuisine",opts)
})
route("/signin", () => {
    const signIn = riot.mount("div#root", "signin");
    document.getElementById("sign-in-form").addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        try {
            await mxFirebase.signIn(email, password);
            window.location.href = "/hotel"
        } catch (err) {
            let p = document.getElementById("err-message");
            p.innerText = err.message
        }
    })
});
route("/homepage", () => {
    const homepage = riot.mount("div#root", "homepage");
    document.getElementById("city-submit").addEventListener("submit",() => {
        localStorage.setItem("city",document.getElementById("box").value)
        window.location.href = '/'
    })
});
route("/hotel", () => {
    let opts = {
        city: cities.hanoi
    }
    console.log(opts);
    const hotel = riot.mount("div#root", "hotel", opts)
});
route("/tour", () => {
    let opts = {
        city: cities.hanoi
    }
    console.log(opts.city)
    riot.mount("div#root", "tour", opts)
})
const firebaseConfig = {
    apiKey: "AIzaSyDTi-gn9URQ4GOCp_mgsilYmOBndvNlC64",
    authDomain: "project-2901-d18a2.firebaseapp.com",
    databaseURL: "https://project-2901-d18a2.firebaseio.com",
    projectId: "project-2901-d18a2",
    storageBucket: "",
    messagingSenderId: "1086571522836",
    appId: "1:1086571522836:web:83b00ba90a8208f9"
};
mxFirebase.init(firebaseConfig);
route.start(true)
