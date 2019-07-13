<tour>
<div>
        <div id="navbar">
            <a href="#"><img src="https://i.imgur.com/OtL9wtY.png" width="199px" height="80px" alt="This is a logo"></a>
            <div id="phong">
                <a href="#">About us</a>
                <a href="#">Home</a>
                <a href="#">Logout</a>
            </div>
        </div>
        <div id="muiten">
            <A href="#"><img src="https://i.imgur.com/QGZnumZ.png" alt=""></A>
            <a href="#"><img src="https://i.imgur.com/POB5nAd.png" alt=""></a>
        </div>
        <div id="cochu">Việt Nam vẻ đẹp bất tận, điểm đến của mọi nhà</div>
        <div each="{tour in opts.city.tours}" class="hotel">
            <img src="https://saigonstartravel.com/wp-content/uploads/2018/11/tour-phu-quoc-2-ngay-1-dem.jpg"
                width="540px" min-height="670px" alt="This is an image">
            <div class="h1">
                <div class="hotel-title bold">{tour.name}</div>
                <div id="giaca">
                    <div>
                        <div style="margin-bottom: 10px"> <span class="bold">- Khởi hành từ:</span>{tour.startPlace}</div><br>
                        <div><span class="bold">- Phương tiện:</span>{tour.transport}</div><br>
                    </div>
                    <div class="h-price">Giá tour:{tour.price}</div>
                </div>
                <div><span class="bold">- Thời gian:</span>{tour.long}</div>
                <br>
                <div><span class="bold">- Khởi hành ngày: </span>{tour.startDate}</div>
                <br>
                <div><span class="bold">- Lưu trú:</span>{tour.accomodation}</div>
                <br>
                <div><span class="bold">- Hotline:</span>{tour.hotline}</div>
                <br>
                <div><span class="bold">- Miêu tả:</span>{tour.description}</div>
            </div>
        </div>
        <div id="rect">
            <div>
                <b>Thông tin</b><br>
                <br>
                <a href="#">Về chúng tôi<br></a>
                <a href="#">Tìm kiếm thêm<br></a>
                <a href="#">Blog<br></a>
                <a href="">Sự kiện<br></a>

            </div>
            <div>
                <b>Dịch vụ</b><br>
                <br>
                <a href="#">Chăm sóc khách hàng<br></a>
                <a href="#">Trợ giúp<br></a>
            </div>
            <div>
                <b>Liên hệ</b><br>
                <br>
                Hotline: 0986-289-025<br>
                Mr.Quang: 0522-570-931<br>
            </div>
        </div>
    </div>
    </div>

    </div>
</tour>