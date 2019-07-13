<hotel>
<div id="navbar">
    <a href="#"><img src="https://i.imgur.com/OtL9wtY.png" width="199px" height="80px" alt="This is a logo"></a>
    <div id="phong">
        <a href="#">About us</a>
        <a href="#">Home</a>
        <a href="#">Logout</a>
    </div>
</div>
<div id="muiten">
    <A href="#"><img src="https://i.imgur.com/ZOdrPpJ.png" alt=""></A>
    <a href="#"><img src="https://i.imgur.com/Otw7zEB.png" alt=""></a>
</div>
<div id="cochu">Việt Nam vẻ đẹp bất tận, điểm đến của mọi nhà</div>
<div each="{hotel in opts.city.hotels}" class="hotel">
    <img src="{hotel.photos[0]}" width="540px" min-height="666px" alt="This is an image">
    <div class="h1">
        <div class="hotel-title">
            <b>{hotel.name}</b>
        </div>
        <div class="flexx"> 
            <div class="star">☆☆☆☆☆</div>
            <div class="h-price">Giá phòng: 2.700.000 VNĐ/đêm</div>
        </div>
        <div class="h-detail">
            <span class="bold">- Địa chỉ: </span>{hotel.address}<br>
            
            <span class="bold">- Hotline:</span>{hotel.hotline}<br>
            
            <span class="bold">- Miêu tả:</span> {hotel.description}<br>
        </div>
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
</hotel>