$('document').ready(function(){
    $('.header > .header_wrap > .header_menu > .header_bar > .menu-btn').click(function() {
        $('.line').toggleClass('on');
        $('.header_topdown').toggleClass('on');
    })
    let thisHover = $('.table_item');

    let mainarr = ["프리미엄 스파","코리아 밀라노","제주도를 한눈에","럭셔리 스카이스크레이퍼","쾌적한 시설, 최고급 시설"];
    let mainarr_EN = ["Premium Spa","Korea Milano","Jeju At a glance","Luxury Skyscraper","High quailty facility"];
    
    let mainarr2 = ["로즈베이 스파 & 풀","HAN 컬렉션 K패션 몰","야외 풀데크","제주 최고층 38층","하얏트 피트니스 센터"];
    let mainarr2_EN = ["Rosebay Spa","HAN Collection K-fashion mall","Pool Deck","Dining in the Clouds at Level 38","Fitness center"];
    
    let subarr1 = ["전문적이고 체계적인 교육을 받은 국내 최고 수준의 테라피스트가 최고급 오가닉 제품만을 사용하여 고객님 취향에 맞는 오감 만족 테라피를 선사합니다. 심신의 활력을 고려한 고급스럽고 감각적인 공간에서 생기를 되찾고 력셔리한 휴식을 경험하세요."
    ,"200여 명의 대한민국 대표 K패션 디자이너들의 감각적이고 아방가르드한 작품들을 한 자리에서 만날 수 있는 HAN Collection. 우먼스 캐주얼, 우먼스 트렌디, 맨즈 캐주얼, 맨즈 컨템포러리, 스트릿 캐주얼, 슈즈, 핸드백, 선글라스, 주얼리 등 14개의 아이템별 Select Shop들이 구성되어 있어 더욱 효율적이고 편리한 쇼핑을 즐기실 수 있습니다.",
    "사계절 다채로운 매력을 느낄 수 있는 4,290m² 크기의 국내 최대규모, 62m 최고 높이에 위치한 풀데크에서는 제주 시내와 푸른바다, 한라산의 절경까지 이어지는 아름다운 풍광을 파노라믹 뷰로 감상하실 수 있습니다.",
    "제주에서 가장 높은 곳에 위치한 38층 어느 곳에서든 360도로 이어지는 제주시내와 바다, 탁트인 한라산의 파노라믹 전경을 즐길 수 있습니다. 가족과 친구, 연인들만의 특별한 추억을 만들어보세요.",
    "전문적이고 체계적인 교육을 통해 엄선하여 선발한 하얏트 호텔 전문 피트니스 강사에게 지도받는 제주 하얏트 피트니스 센터는 제주에서 단연 최고의 시설과 서비스를 제공합니다."];
    let subarr1_EN = ["A luxury spa that offers bespoke treatments, incorporating the latest international trends and cosmeceutical technologies from around the world.",
"Explore two floors of fashion retail, dedicated to supporting local Korean fashion designers, from international fame to up and coming talents in the local South Korean fashion industry. Explore South Korea’s glamourous K-Fashion trends by category – shoes, bags, etc.",
"The largest 4,290sqm outdoor deck on Jeju Island at the podium block. The infinity pool with a backdrop of the sea and Halla Mountain will make for the perfect Instagram post. Lounge at the cabanas, hot tub or day beds. The children can play at kid’s pool. Cabana areas are subject to reservations and usage is chargeable.",
"Wine and dine in the clouds looking out into the horizon. Featuring a multi-dining and entertainment destination to whet your appetite for the finer things in life. Move around Lounge 38, Pocha and Steak House for a multi-sensory dining experience throughout the day.",
"Professional instructors who has been strictly nominated and trained with high systematic education on personal training session, We, provide best service with supreme facilities"]
    
    thisHover.hover(function() {
        let ele = $(this);
        let index = ele.index();
        let main1 = $('.content_images_text .title_1');
        let main1_EN = $('.content_images_text .title_1_EN');
        let main2 = $('.content_images_text .title_2');
        let main2_EN = $('.content_images_text .title_2_EN');
        let sub1 = $('.content_images_text .sub_1');
        let sub1_EN = $('.content_images_text .sub_1_EN ');

        main1.text(mainarr[index]);
        main1_EN.text(mainarr_EN[index]);
        main2.text(mainarr2[index]);
        main2_EN.text(mainarr2_EN[index]);
        sub1.text(subarr1[index]);
        sub1_EN.text(subarr1_EN[index]);
        console.log(index)
    }, function() {
        $('.content_2 .content_images_text h3').text("");
        $('.content_2 .content_images_text p').text("");
    });

    $('.language').click(function() {
        $('p, h3').toggleClass('EN');
        $('.bottom_logo, .img, .content_item').toggleClass("on")
    });

    $(window).scroll(function() {
        let Top = $(this).scrollTop();

        if(Top > 100) {
            $('#topButton').css("opacity","1");
        }
        else 
            $('#topButton').css("opacity","0");

    });

    $(window).scroll(function() {
        let Top = $(this).scrollTop();

        if(Top > 934) {
            $('.header_wrap').addClass("on");
        }
        else
            $('.header_wrap').removeClass("on")
    })

    $('#topButton').click(function() {
        $('html,body').animate({
            scrollTop:0
        },500);
    });

    const slicks = $('.slick');

    slicks.each(function(){
        if($(this).is(".slick-one")) {
            $(this).slick({
                dots: true,
                // vertical: true,
                slidesToShow: 1,
                infinite: true,
                slidesToScroll: 1,
                autoplay:false,
                autoplaySpeed:3000
                // centerMode:true,

            });
        }
    })
    let slick_tabRespose = $('.slick-two');

    let slickOptions = {
        dots:false,
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        autoplay:false
    }
    let titleArr = ["제주 핫팟", "녹나무", "그랜드 키친", "포차","99 밸리", "스테이크 하우스", "차이나 하우스", "유메야마"]
    let titleArr_EN = ["Jeju Hot Pot", "Noknamu", "Grand Kitchen", "Pocha","99 Valley", "Steak House", "China House", "Yumeyama"]

    let titleSubArr = ["제주의 건강한 식재료와 훠궈가 만나 특별한 다이닝 경험을 선사합니다. 생선이나 고기, 버섯을 베이스로 한 깊고 시원한 맛이 일품인 ‘바이탕’과 알싸한 마라맛의 매콤한 ‘홍탕’ 육수에 신선한 해산물, 얇게 썬 고기, 계절별 다양한 채소를 취향에 따라 넣고 전문 셰프의 레시피로 만들어진 다양한 특제 소스를 곁들여 보세요. 중국 정통 훠궈의 담백하고 이국적인 맛의 신세계를 경험하실 수 있습니다.",
                        "알맞게 숙성된 제주 흑돼지와 엄선된 최상급 한우는 테이블 화로에서 직접 구워져 완벽한 맛을 선사합니다. 단아한 한국의 멋과 모던함이 어우러진 품격 있는 공간에서 입안 가득 터지는 풍부한 육즙을 느끼며 숯불구이와 잘 어울리는 한라산 소주, 제주 생막걸리를 곁들여보세요. 아침과 점심에는 비빔밥, 된장찌개, 성게미역국 등 정갈한 한정식 메뉴도 즐길 수 있습니다.",
                        "월드클래스 셰프 군단이 선보이는 국내 최고, 최대 규모 프리미엄 뷔페를 만나보세요. 7개의 오픈 키친에서 라이브로 조리되는 풍미가 깊은 양고기, 육즙이 풍부한 스테이크와 씨푸드 그릴, 제주도 청정해에서 잡아 올린 제철 해산물과 신선한 생선회, 정갈한 제주 향토 음식, 고품격 중식, 전문 셰프의 손끝에서 매일 새롭게 준비되는 수제 아이스크림과 다양한 디저트까지 풍성하게 맛볼 수 있습니다. 고급스럽고 트랜디한 인테리어 공간에서 세계 각국의 다채로운 미식 요리를 마음껏 즐겨보세요.",
                        "제주도 하늘과 가장 맞닿은 곳에서 푸른 바다와 오렌지색 노을 지는 석양을 바라보며 황홀경에 취해보세요. 밤늦게까지 올드 K팝에 흠뻑 빠져들며 갓 튀겨낸 바삭한 치킨과 시원한 맥주, 해물파전과 생막걸리, 다양한 꼬치구이와 소주 칵테일을 즐겨 보세요. 트렌디한 모던 인테리어와 아름다운 석양이 잊지 못할 제주의 밤을 선사합니다.",
                        "99개의 석봉이 숨어 있는 아름다운 섬 제주에서 99개의 다양한 아시안 푸드를 즐겨보세요. 중국의 수타면, 태국의 볶음밥, 싱가포르의 락사 등 아시아를 대표하는 맛있는 음식을 캐주얼하게 즐길 수 있는 다양한 요리를 제공합니다.  * 99밸리는 외국인 전용 카지노 내에 위치한 다이닝 시설입니다.",
                        "제주의 가장 높은 고도에서 웅장한 한라산과 탁 트인 제주 시내를 내려다보며 풍미 가득한 최고의 다이닝을 즐기세요. 해외 5성급 호텔 총괄 셰프를 역임한 스타 셰프 벌튼이 섬세한 조리와 노하우로 부드러운 육질의 최상급 한우, 제주 흑돼지와 신선한 해산물 그릴 메뉴를 선보입니다. 소믈리에가 추천하는 엄선된 와인 페어링과 함께 제주 파노라믹 뷰를 감상하며 천상의 맛을 경험해 보세요.",
                        "빈센트 셰프가 선보이는 중국 4대 진미를 맛보세요. 진귀한 최상급 재료만을 사용하여 중국 정통 최고의 맛을 그대로 전해드립니다. 품격이 느껴지는 호사로운 공간에서 베이징덕, 딤섬 등 고품격 중식의 황홀한 미식을 경험해 보세요.",
                        "5성급 호텔 출신의 스타 셰프 코지마가 이끄는 모던 일식 다이닝 바에서 딥하우스 음악과 함께 이자카야, 스시, 테판야끼를 즐겨 보세요. 일류 바텐더가 만드는 하이볼과 소주 칵테일, 사케를 곁들이면 밤늦게까지 분위기 있는 추억을 만들 수 있습니다. 청정 제주바다에서 갓 잡아올린 최고 신선도를 자랑하는 사시미와 스시, 최상급 식재료로 선보이는 이자카야 메뉴를 맛보며 모던 일식의 신세계를 경험하세요."]
    let titleSubArr_EN = ["This authentic Chinese hot pot restaurant presents Jeju's freshest seafood, meat and seasonal ingredients. Choose your soup bases, from nourishing pork broths to Sichuan spicy soups, prepared by our soup master. Select from a wide variety of fresh seafood, meats and seasonal vegetables to complete your meal. Complement your meal with a wide range of sauces and condiments to complete your dining experience.",
                        "The finest cuts of Jeju black pork and Korean Hanwoo beef are grilled to perfection at your table. Complete your Korean dining experience with local Jeju Hallasan soju and makgeoli. For breakfast and lunch, guests can also select from signature favourites like bibimbap, doenjang jjigae, sea urchin seaweed soup.",
                        "Enjoy a fun and vibrant ‘Las-Vegas’ style buffet in Jeju. Born and raised in Korea, Chef Min was the Chef de Cuisine hailing from the top restaurant in Macau. He brings with him a wealth of culinary experience and knowledge. Featuring seven show kitchens, enjoy premium beef and lamb cuts to premier seafood grilled a-la-minute. Buffet includes a selection of fresh seafood like prawns and mussels; a sushi and sashimi corner, as well as refreshing salads and appetizers. Indulge in assorted desserts and a kid's buffet in a new and modern space.",
                        "Witness amazing sunsets at Jeju’s highest point. Enjoy fried chicken with beer, Korean seafood pancakes with makgeolli and Korean skewers with soju while you immerse yourself in the best of oldies K-pop till late. This is the perfect place to experience modern Korean nightlife.",
                        "99 Valley is the perfect dining choice for a fast, affordable and delicious meal – featuring the best of Asian comfort food from Greater China and Southeast Asia. (accessible by foreign passport holders only).",
                        "Enjoy the best dining experience as you overlook stunning Jeju sea and Mount Halla. World-class Executive Chef Burton Yi serves up signature grilled dishes like Hanwoo beef, Jeju black pork tomahawk, and fresh seafood tower.",
                        "Led by Master Chef Vincent, our team of world-class specialty chefs serves up dim sum, BBQ , Peking Duck and wok, showcasing the best of China’s cuisines specializing in Northern, Shanghainese, Sichuan and Cantonese dishes. Experience the taste of China with the best of Chinese delicacies. A must-try is the signature Peking duck, freshly roasted and then skillfully carved tableside.",
                        "Led by Chef Kojima, enjoy Sushi, Izakaya and Teppanyaki – 3 dining concepts all under one roof. This allows you to order from any kitchen. Choose from freshest sashimi like yellowtail and uni, sushi, charcoal grilled skewers, tempura or lobster and beef teppan. Complement your meal with an extensive selection of premium Japanese sake and highball."]
    
    let sub_1Arr = ["런치\n토요일 & 일요일ㅣ11:30AM - 3:00PM\n\n디너\n매일ㅣ5:00PM - 10:00PM",
                    "조식\n매일ㅣ7:00AM - 11:00AM\n\n런치\n매일ㅣ11:30AM - 3:00PM\n\n디너\n매일ㅣ5:00PM - 10:00PM",
                    "조식\n매일ㅣ6:30AM - 11:00AM\n\n런치\n매일ㅣ12:00PM - 2:30PM\n\n디너\n매일ㅣ5:00PM - 10:00PM",
                    "조식\n매일ㅣ7:00AM - 1:00PM\n\n디너\n일요일 - 목요일ㅣ4:00PM - 12:30AM\n금요일 - 토요일ㅣ4:00PM - 1:30AM",
                    "매일ㅣ24시간",
                    "런치\n수요일 & 일요일ㅣ11:30AM - 3:00PM\n\n디너\n수요일 & 일요일ㅣ5:00PM - 10:00PM",
                    "런치\n수요일 & 일요일ㅣ11:30AM - 3:00PM\n\n디너\n매일ㅣ5:00PM - 10:00PM",
                    "디너\n목요일, 일요일 - 월요일ㅣ5:30PM - 12:30AM\n금요일 - 토요일 | 5:30PM - 1:30AM\n\n※ 오마카세 코스: 스시 혹은 테판야끼 (전화예약 필수)- 5:30PM (1부)  &  7:30PM (2부)"]       
    let sub_1Arr_EN = ["Lunch\nSaturday & Sundayㅣ11:30AM - 3:00PM\n\nDinner\nMonday - Sundayㅣ5:00PM - 10:00PM",
                    "Breakfast\nMonday - Sundayㅣ7:00AM - 11:00AM\n\nLunch\nMonday - Sundayㅣ11:30AM - 3:00PM\n\nDinner\nMonday - Sundayㅣ5:00PM - 10:00PM",
                    "Breakfast\nMonday - Sundayㅣ6:30AM - 11:00AM\n\nLunch\nMonday - Sundayㅣ12:00PM - 2:30PM\n\nDinner\nMonday - Sundayㅣ5:00PM - 10:00PM",
                    "Breakfast\nMonday - Sundayㅣ7:00AM - 1:00PM\n\nDinner\nSunday - Thursdayㅣ4:00PM - 12:30AM\nFriday - Saturdayㅣ4:00PM - 1:30AM",
                    "Monday - Sundayㅣ24Hours",
                    "Lunch\nWednesday & Sundayㅣ11:30AM - 3:00PM\n\nDinner\nWednesday & Sundayㅣ5:00PM - 10:00PM",
                    "Lunch\nWednesday & Sundayㅣ11:30AM - 3:00PM\n\nDinner\nMonday - Sundayㅣ5:00PM - 10:00PM",
                    "Dinner\nThursday, Sunday - Mondayㅣ5:30PM - 12:30AM\nFriday - Saturday | 5:30PM - 1:30AM\n\n※ Omakase Course: Choice of Sushi or Teppanyaki* Telephone Reservation Required 5:30PM (1st seating)  &  7:30PM (2nd seating)"]
    
    let sub_2Arr = ["3층","3층","4층","타워 2ㅣ38층","2층","타워 2ㅣ38층","3층","4층"]
    let sub_2Arr_EN = ["3F","3F","4F","Tower 2ㅣ38F","2F","Tower 2ㅣ38F","3F","4F"]

    $(".slick-one").on('afterChange', function(e,s,currentSlide) {
        $('.content_img_text .title').text(titleArr[currentSlide])
        $('.content_img_text .title_EN').text(titleArr_EN[currentSlide])
        $('.content_img_text .title_sub').text(titleSubArr[currentSlide])
        $('.content_img_text .title_sub_EN').text(titleSubArr_EN[currentSlide])
        $('.content_img_text .sub_1').text(sub_1Arr[currentSlide])
        $('.content_img_text .sub_1_EN').text(sub_1Arr_EN[currentSlide])
        $('.content_img_text .sub_2').text("위치 : "+sub_2Arr[currentSlide])
        $('.content_img_text .sub_2_EN').text("Location : "+sub_2Arr_EN[currentSlide])
    });

    $('.content_4 .content_img').dblclick(function() {
        $('.content_4 .slick-one').toggleClass('on');
        $('.content_4 .content_img').toggleClass('on');
        $('.content_img_text').toggleClass('on');
        $('.content_img_text p').toggleClass('on');
        $('.slick-dots').toggleClass('on');
        $('.slick').slick('slickPause', true);
    })
    $('.slick .content_img').mouseover(function(){
        $('.slick').slick('slickPlay', false);
    })
    $('.slick .content_img').mouseout(function(){
        $('.slick').slick('slickPlay', true);
    })


    $(window).resize(function(){
        if($(this).width() < 1024) {
            slick_tabRespose.not('.slick-initialized').slick(slickOptions);
            thisHover.unbind('mouseenter mouseleave');
            $(".slick-two").on('afterChange', function(e,s,currentSlide) { 
                let main1 = $('.content_images_text .title_1');
                let main1_EN = $('.content_images_text .title_1_EN');
                let main2 = $('.content_images_text .title_2');
                let main2_EN = $('.content_images_text .title_2_EN');
                let sub1 = $('.content_images_text .sub_1');
                let sub1_EN = $('.content_images_text .sub_1_EN ');
        
                main1.text(mainarr[currentSlide]);
                main1_EN.text(mainarr_EN[currentSlide]);
                main2.text(mainarr2[currentSlide]);
                main2_EN.text(mainarr2_EN[currentSlide]);
                sub1.text(subarr1[currentSlide]);
                sub1_EN.text(subarr1_EN[currentSlide]);
            });
        }
        else
            slick_tabRespose.slick("unslick");
            thisHover.bind('mouseenter mouseleave');
    });

    $(window).resize(function() {
        let responsive = $(".content_4 .content_wrap").width() * 0.48;
        let responsive_on = $(".content_4 .content_wrap").width() * 0.88;
        if($(this).width() < 1200) {
            $(".slick-dots").css("left", responsive)
        }
        else {
            $(".slick-dots").css("left", "585px")
        }
    })
});
