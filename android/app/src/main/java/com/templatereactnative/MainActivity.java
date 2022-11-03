package com.templatereactnative;
import android.os.Bundle;
import android.content.Intent;
import com.rnfs.RNFSPackage;
import org.devio.rn.splashscreen.SplashScreen;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
 @Override
  protected void onCreate(Bundle savedInstanceState) {
      SplashScreen.show(this, true);  // here
      super.onCreate(savedInstanceState);
  }
//   @Override
//   protected List<ReactPackage> getPackages() {
//     return Arrays.<ReactPackage>asList(
//       new MainReactPackage(), // <---- add comma
//       new RNFSPackage() // <---------- add package
//     );
//   }
  @Override
  protected String getMainComponentName() {
    return "templateReactNative";
  }
  @Override
  public void onNewIntent(Intent intent) {
    super.onNewIntent(intent);
    setIntent(intent);
  }
}
