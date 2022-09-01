
            var locations = [
            ['DanBam Seoul I', 37.54966468352919, 126.96332079767227],
            ['DanBam Seoul II', 37.58227693935321, 126.99985762650877],
            ['DanBam Seoul III', 37.572899852272336, 126.98386294000164],
            ['DanBam Seoul IV', 37.534665883054394, 126.98910401116498],
            ['DanBam Busan', 35.1003639133983, 129.0280076976118],
            ['DanBam Daegu', 35.87463037746693, 128.58987686931508],
            ['DanBam Gwangju', 35.130657593892515, 126.89606506877686],
            ['DanBam Japan', 35.66877128354741, 139.76121062646098],
            ['DanBam Taiwan', 25.036084846290166, 121.52552083364135]
            ];

            var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: new google.maps.LatLng(37.54966468352919, 126.96332079767227),
            mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            var infowindow = new google.maps.InfoWindow();

            var marker, i;

            for (i = 0; i < locations.length; i++)
            {
            marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
            }
            })(marker, i));
            }
        