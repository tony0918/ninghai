<?php
if (isset($_GET['f'])) {
  switch ($_GET['f']) {
    case 'ULTRA-TRAIL_NINGHAI_map_42k':
      $file = './assets/NinghaiTrail42km.kml';
      break;
    case 'ULTRA-TRAIL_NINGHAI_map_100k':
      $file = './assets/Ultra-TrailNinghai102km.kml';
      break;
    case 'MandatoryGear50':
      $file = './assets/GearList50-cn.pdf';
      break;
    case 'MandatoryGear100':
      $file = './assets/GearList50.pdf';
      break;
    case 'MandatoryGear11':
      $file = './assets/GearList11.5-cn.pdf';
      break;
    case 'MandatoryGear42':
      $file = './assets/GearList11.5.pdf';
      break;
    case 'ninghai_classic_50k':
      $file = './assets/NinghaiClassic.gpx';
      break;
    default:
      exit;
  }
  if (file_exists($file)) {
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="' . basename($file) . '"');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($file));
    readfile($file);
  }
}
exit;