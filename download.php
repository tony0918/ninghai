<?php
if (isset($_GET['f'])) {
  switch ($_GET['f']) {
    case 'ULTRA-TRAIL_NINGHAI_map_42k':
      $file = './assets/0-42.gpx';
      break;
    case 'ULTRA-TRAIL_NINGHAI_map_100k':
      $file = './assets/Integral-100.gpx';
      break;
    case 'MandatoryGear100':
      $file = './assets/MandatoryGear100.pdf';
      break;
    case 'MandatoryGear42':
      $file = './assets/MandatoryGear42.pdf';
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