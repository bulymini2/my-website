const restaurantData = [
    {
        name: "三元號",
        address: "台北市中正區信陽街34號",
        phone: "02-2311-1916",
        mrt: "台北車站",
        feature: "老字號滷肉飯，肉質細嫩，醬汁香濃。"
    },
    {
        name: "今大鲁肉飯",
        address: "台北市萬華區成都路27巷4弄4號",
        phone: "02-2388-2065",
        mrt: "西門站",
        feature: "使用上好的肉，滷汁入味，口感絕佳。"
    },
    {
        name: "北北車滷肉飯",
        address: "台北市中正區信陽街29號",
        phone: "02-2311-3456",
        mrt: "台北車站",
        feature: "肉香四溢，飯粒飽滿，滷汁獨特。"
    },
    {
        name: "司機俱樂部",            
        address: "台北市中正區民生西路197號",
        phone: "02-2556-6077",
        mrt: "北門站",
        feature: "歷史悠久，滷肉飯配菜豐富。"
    },
    {
        name: "富霸王豬腳",
        address: "台北市中山區南京東路二段115巷20號",
        phone: "02-2506-3757",
        mrt: "松江南京站",
        feature: "招牌豬腳搭配滷肉飯，口感絕佳。"
    },
    {
        name: "小王煮瓜",
        address: "台北市中正區南昌路一段152號",
        phone: "02-2396-0807",
        mrt: "古亭站",
        feature: "滷汁入味，配菜多樣，營養均衡。"
    },
    {
        name: "施家麻油腰花",
        address: "台北市萬華區廣州街259號",
        phone: "02-2302-1743",
        mrt: "龍山寺站",
        feature: "麻油腰花獨具風味，滷肉飯同樣美味。"
    },
    {
        name: "矮仔財滷肉飯",
        address: "台北市萬華區廣州街22號",
        phone: "02-2371-4410",
        mrt: "西門站",
        feature: "老字號店家，滷肉飯口味經典。"
    },
    {
        name: "金峰滷肉飯",
        address: "台北市中正區羅斯福路一段10號",
        phone: "02-2396-0808",
        mrt: "台大醫院站",
        feature: "招牌滷肉飯，肉香濃郁，飯粒Q彈。"
    },
    {
        name: "黃記滷肉飯",
        address: "台北市中正區南昌路一段130號",
        phone: "02-2396-8575",
        mrt: "古亭站",
        feature: "滷汁秘製，口味獨特。"
    }
];

function showDetails(index) {
    const restaurant = restaurantData[index];
    const detailsWindow = window.open('', '_blank', 'width=600,height=400');
    detailsWindow.document.write(`
        <html>
            <head>
                <title>${restaurant.name}</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: black;
                        color: white;
                        padding: 20px;
                        text-align: center;
                    }
                    h2 {
                        margin-top: 0;
                    }
                </style>
            </head>
            <body>
                <h2>${restaurant.name}</h2>
                <p>地址: ${restaurant.address}</p>
                <p>電話: ${restaurant.phone}</p>
                <p>捷運站: ${restaurant.mrt}</p>
                <p>特色: ${restaurant.feature}</p>
            </body>
        </html>
    `);
    detailsWindow.document.close(); // 關閉 document 寫入流
}
</script>

