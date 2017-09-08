<?php
if (isset($_GET['f'])) {
  switch ($_GET['f']) {
    case 'ULTRA-TRAIL_NINGHAI_map_100k':
      $file = './assets/UTNH-100K.GPX';
      break;
    case 'ULTRA-TRAIL_NINGHAI_map_50k':
      $file = './assets/UTNH-50K.gpx';
      break;
    case 'MandatoryGear100':
      $file = './assets/2017UTNH-100km-Gear-List-cn.pdf';
      break;
    case 'MandatoryGear100en':
      $file = './assets/2017UTNH-100km-Gear-List-en.pdf';
      break;
    case 'MandatoryGear11':
      $file = './assets/GearList11.5-cn.pdf';
      break;
    case 'MandatoryGear50':
      $file = './assets/2017UTNH-50km-Gear-List-cn.pdf';
      break;
    case 'MandatoryGear50en':
      $file = './assets/2017UTNH-50km-Gear-List-en.pdf';
      break;
    case 'ninghai_classic_50k':
      $file = './assets/NinghaiClassic.gpx';
      break;
    case 'LijiangSkyrace21k':
      $file = './assets/LijiangSkyrace21k.gpx';
      break;
    case 'LijiangUltra50k':
      $file = './assets/LijiangUltra50k.gpx';
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
    ob_clean();
    flush();
    readfile($file);
  }
}
exit;