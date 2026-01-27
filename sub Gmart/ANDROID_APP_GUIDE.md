# 📱 Goldmart Android App - Play Store Guide

Complete guide to convert your Goldmart website into an Android app and publish it on Google Play Store.

## 🎯 Overview

We'll use **Capacitor** to wrap your React/Vite web app into a native Android app. This allows you to:
- ✅ Use your existing web code (no rewrite needed!)
- ✅ Access native device features (camera, GPS, notifications)
- ✅ Publish to Google Play Store
- ✅ One codebase for web + mobile

---

## 📋 Prerequisites

### Required Software:
1. **Node.js** (v18+) - Already installed ✅
2. **Java JDK 17+** - [Download](https://adoptium.net/)
3. **Android Studio** - [Download](https://developer.android.com/studio)
4. **Google Play Developer Account** - $25 one-time fee

### System Requirements:
- Windows 10/11 (you're on Windows ✅)
- 8GB RAM minimum
- 10GB free disk space

---

## 🚀 Step-by-Step Setup

### Step 1: Install Capacitor

```bash
# Install Capacitor CLI and Android platform
npm install @capacitor/core @capacitor/cli
npm install @capacitor/android

# Initialize Capacitor
npx cap init

# When prompted:
# - App name: Goldmart
# - App ID: com.goldmart.app (or your preferred ID)
# - Web dir: dist
```

### Step 2: Add Android Platform

```bash
# Build your web app first
npm run build

# Add Android platform
npx cap add android

# Sync web assets to Android
npx cap sync
```

### Step 3: Configure Android App

Edit `android/app/src/main/AndroidManifest.xml`:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <application
        android:label="Goldmart"
        android:icon="@mipmap/ic_launcher"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:theme="@style/AppTheme"
        android:usesCleartextTraffic="true">
        
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:launchMode="singleTask"
            android:theme="@style/AppTheme"
            android:configChanges="orientation|keyboardHidden|keyboard|screenSize|locale|smallestScreenSize|screenLayout|uiMode"
            android:windowSoftInputMode="adjustResize">
            
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
```

### Step 4: Create App Icons

You need multiple icon sizes for Android. Create these in `android/app/src/main/res/`:

**Required Sizes:**
- `mipmap-mdpi/ic_launcher.png` - 48x48
- `mipmap-hdpi/ic_launcher.png` - 72x72
- `mipmap-xhdpi/ic_launcher.png` - 96x96
- `mipmap-xxhdpi/ic_launcher.png` - 144x144
- `mipmap-xxxhdpi/ic_launcher.png` - 192x192

**Quick Solution:** Use online tools:
- [App Icon Generator](https://www.appicon.co/)
- [Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/)

Upload your `favicon.svg` and generate all sizes automatically!

### Step 5: Build Android App

```bash
# Open in Android Studio
npx cap open android

# In Android Studio:
# 1. Wait for Gradle sync to complete
# 2. Build → Build Bundle(s) / APK(s)
# 3. Build → Generate Signed Bundle / APK
```

### Step 6: Generate Signed APK/AAB

**For Play Store, you need a signed AAB (Android App Bundle):**

1. **Create Keystore:**
   ```bash
   keytool -genkey -v -keystore goldmart-release.keystore -alias goldmart -keyalg RSA -keysize 2048 -validity 10000
   ```

2. **Configure signing in `android/app/build.gradle`:**
   ```gradle
   android {
       signingConfigs {
           release {
               storeFile file('goldmart-release.keystore')
               storePassword 'YOUR_PASSWORD'
               keyAlias 'goldmart'
               keyPassword 'YOUR_PASSWORD'
           }
       }
       buildTypes {
           release {
               signingConfig signingConfigs.release
           }
       }
   }
   ```

3. **Build Release AAB:**
   - In Android Studio: Build → Generate Signed Bundle / APK
   - Select "Android App Bundle"
   - Use your keystore
   - Output: `app-release.aab`

---

## 📦 Google Play Store Submission

### Step 1: Create Developer Account

1. Go to [Google Play Console](https://play.google.com/console)
2. Pay $25 one-time registration fee
3. Complete account setup

### Step 2: Create New App

1. Click "Create app"
2. Fill in details:
   - **App name**: Goldmart
   - **Default language**: English
   - **App or game**: App
   - **Free or paid**: Free
   - **Declarations**: Complete all required

### Step 3: Upload AAB

1. Go to **Production** → **Create new release**
2. Upload your `app-release.aab` file
3. Add release notes
4. Review and roll out

### Step 4: Complete Store Listing

**Required Information:**

1. **App Details:**
   - Short description (80 chars): "Your trusted marketplace for authentic gold jewellery"
   - Full description (4000 chars): Write about Goldmart features
   - App icon: 512x512 PNG (use your favicon)
   - Feature graphic: 1024x500 PNG
   - Screenshots: 2-8 screenshots (min 320px, max 3840px)

2. **Graphics:**
   - **App icon**: 512x512 PNG (no transparency)
   - **Feature graphic**: 1024x500 PNG
   - **Phone screenshots**: At least 2 (min 320px height)
   - **Tablet screenshots**: Optional but recommended

3. **Content Rating:**
   - Complete questionnaire
   - Get rating certificate

4. **Privacy Policy:**
   - Required URL (can host on your website)
   - Must include data collection details

5. **Target Audience:**
   - Select age groups
   - Content guidelines

### Step 5: Pricing & Distribution

- Set as **Free**
- Select countries (or worldwide)
- Accept content guidelines

### Step 6: Review & Publish

1. Review all sections (green checkmarks)
2. Click "Submit for review"
3. Wait 1-7 days for approval
4. **Your app goes live!** 🎉

---

## 🎨 App Store Assets Needed

### Screenshots (Required):
- **Phone**: 2-8 screenshots
  - Minimum: 320px height
  - Maximum: 3840px height
  - Format: PNG or JPG
  - Aspect ratio: 16:9 or 9:16

### Graphics:
- **App Icon**: 512x512 PNG (no transparency, rounded corners)
- **Feature Graphic**: 1024x500 PNG
- **Promo Graphic**: Optional, 180x120 PNG

### How to Create Screenshots:
1. Run your app in Android Studio emulator
2. Take screenshots of key screens:
   - Homepage
   - Jewellery listing
   - Shop details
   - Product details
3. Use tools like [Screenshot Builder](https://www.appstorescreenshot.com/)

---

## 🔧 Capacitor Configuration

Create `capacitor.config.ts`:

```typescript
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.goldmart.app',
  appName: 'Goldmart',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#FFD700",
      showSpinner: false
    }
  }
};

export default config;
```

---

## 📱 Testing Your App

### Test on Emulator:
```bash
# Open Android Studio
npx cap open android

# Run → Run 'app'
# Select emulator or device
```

### Test on Real Device:
1. Enable Developer Options on your Android phone
2. Enable USB Debugging
3. Connect via USB
4. Run from Android Studio

### Test APK:
```bash
# Build debug APK
npx cap build android

# Install on device
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

---

## 🚀 Build Commands

Add to `package.json`:

```json
{
  "scripts": {
    "build:android": "npm run build && npx cap sync android",
    "open:android": "npx cap open android",
    "sync:android": "npx cap sync android"
  }
}
```

---

## 📝 Play Store Checklist

Before submitting, ensure:

- ✅ App is tested on multiple devices
- ✅ All features work offline (if applicable)
- ✅ Privacy policy URL is accessible
- ✅ App icon meets requirements (512x512, no transparency)
- ✅ Screenshots are high quality
- ✅ App description is complete
- ✅ Content rating is obtained
- ✅ AAB is signed with release keystore
- ✅ Version code increments with each release
- ✅ App doesn't crash on launch
- ✅ All links work correctly

---

## 💰 Costs

- **Google Play Developer Account**: $25 (one-time)
- **App Development**: FREE (using your existing code)
- **Hosting**: FREE (if using free hosting)

**Total: $25 one-time fee**

---

## 🔄 Updating Your App

1. Make changes to your web app
2. Build: `npm run build`
3. Sync: `npx cap sync android`
4. Build new AAB in Android Studio
5. Upload new version to Play Console
6. Increment version code/name

---

## 🆘 Troubleshooting

### Build Errors:
```bash
# Clean and rebuild
cd android
./gradlew clean
./gradlew build
```

### Capacitor Sync Issues:
```bash
# Remove and re-add platform
npx cap remove android
npx cap add android
npx cap sync
```

### Icon Issues:
- Ensure all icon sizes are present
- Use PNG format (not SVG for Android)
- No transparency in Play Store icon

---

## 📚 Resources

- [Capacitor Docs](https://capacitorjs.com/docs)
- [Google Play Console](https://play.google.com/console)
- [Android Developer Guide](https://developer.android.com/)
- [Play Store Policies](https://play.google.com/about/developer-content-policy/)

---

## ✨ Quick Start Summary

1. ✅ Install Capacitor: `npm install @capacitor/core @capacitor/cli @capacitor/android`
2. ✅ Initialize: `npx cap init`
3. ✅ Build web app: `npm run build`
4. ✅ Add Android: `npx cap add android`
5. ✅ Open in Android Studio: `npx cap open android`
6. ✅ Build AAB in Android Studio
7. ✅ Create Play Store account ($25)
8. ✅ Upload AAB and complete listing
9. ✅ Submit for review
10. ✅ **Your app is live!** 🎉

---

**Need help? Check the detailed steps above or ask for assistance!**
