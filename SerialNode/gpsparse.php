<?
	$text = "\$GPRMC.....";
	
	list ($id,$hora,$estado,$lat,$c_lat,$lng,$c_lng,$velocidad,$curso,$fecha,$variacion_mag,$chsum) 
	= explode(",",$text); 

	$lat_map = substr($lat,2,strlen($lat)) / 60 + substr($lat,0,2);
	$lng_map = substr($lng,3,strlen($lng)) / 60 + substr($lng,0,3) ;

	if($c_lng == 'W'){
		$lng_map  = $lng_map * -1;
	}
	if($c_lat == 'S'){
		$lat_map = $lat_map * -1;
	}

	echo $lat_map.",".$lng_map."\n";
?>