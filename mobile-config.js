// mobile-config.js
// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.file.test',
  name: 'FCDemo',
  description: 'File Collection Demo',
  author: 'Vaughn Iverson/Mike King',
  email: 'mikkelking@hotmail.com',
  website: 'http://meteormen.io'
});
// Set up resources such as icons and launch screens.
App.icons({
'android_mdpi'    : 'public/res/icon/mipmap-mdpi/ic_launcher.png',     // (48x48)
'android_hdpi'    : 'public/res/icon/mipmap-hdpi/ic_launcher.png',   // (72x72)
'android_xhdpi'   : 'public/res/icon/mipmap-xhdpi/ic_launcher.png',  // (96x96)
'android_xxhdpi'  : 'public/res/icon/mipmap-xxhdpi/ic_launcher.png',   // (144x144)
'android_xxxhdpi' : 'public/res/icon/mipmap-xxxhdpi/ic_launcher.png'   // (192x192)//   
});
App.launchScreens({
'android_mdpi_portrait': 'public/res/screen.png',
'android_mdpi_landscape': 'public/res/screen.png',
'android_hdpi_portrait': 'public/res/screen.png',
'android_hdpi_landscape': 'public/res/screen.png',
'android_xhdpi_portrait': 'public/res/screen.png',
'android_xhdpi_landscape': 'public/res/screen.png',
'android_xxhdpi_portrait': 'public/res/screen.png',
'android_xxhdpi_landscape': 'public/res/screen.png'
});
// Set PhoneGap/Cordova preferences
//App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'landscape');
App.setPreference('Orientation', 'landscape', 'android');
App.setPreference('Fullscreen', 'true', 'android');
// Pass preferences for a particular PhoneGap/Cordova plugin
// Add custom tags for a particular PhoneGap/Cordova plugin
// to the end of generated config.xml.
// Universal Links is shown as an example here.
App.appendToConfig(`
  <universal-links>
    <host name="localhost:3000" />
  </universal-links>
`);

App.accessRule('blob:*');
App.accessRule('*');


