package com.templatereactnative;
import android.os.Bundle;
import android.content.Intent;
import org.devio.rn.splashscreen.SplashScreen;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
 @Override
  protected void onCreate(Bundle savedInstanceState) {
      SplashScreen.show(this, true);  // here
      // SplashScreen.show(this, R.style.SplashScreenTheme);  // here
      super.onCreate(savedInstanceState);
  }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
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
