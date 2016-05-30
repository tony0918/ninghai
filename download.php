<?php
if (isset($_GET['f'])) {
  switch ($_GET['f']) {
    case 'ULTRA-TRAIL_NINGHAI_map_42k':
      $file = './assets/ULTRA-TRAIL_NINGHAI_map_42k.jpg';
      break;
    case 'ULTRA-TRAIL_NINGHAI_map_100k':
      $file = './assets/ULTRA-TRAIL_NINGHAI_map_100k.jpg';
      break;
    case 'MandatoryGear':
      $file = './assets/MandatoryGear.pdf';
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