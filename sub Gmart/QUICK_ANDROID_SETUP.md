# ⚡ Quick Android App Setup - 10 Minutes

## 🎯 Fastest Way to Create Android App

### Step 1: Install Required Software (One-Time Setup)

1. **Java JDK 17+**
   - Download: https://adoptium.net/
   - Install and set JAVA_HOME environment variable

2. **Android Studio**
   - Download: https://developer.android.com/studio
   - Install Android SDK (comes with Android Studio)
   - Accept licenses: `sdkmanager --licenses`

### Step 2: Install Capacitor (2 minutes)

```bash
# Install Capacitor
npm install @capacitor/core @capacitor/cli @capacitor/android

# Initialize Capacitor
npx cap init

# When prompted:
# - App name: Goldmart
# - App ID: com.goldmart.app
# - Web dir: dist
```

### Step 3: Build & Add Android Platform (2 minutes)

```bash
# Build your web app
npm run build

# Add Android platform
npx cap add android

# Sync files
npx cap sync
```

### Step 4: Open in Android Studio (1 minute)

```bash
npx cap open android
```

### Step 5: Create App Icons

**Easy Method - Use Online Tool:**
1. Go to: https://www.appicon.co/
2. Upload your `public/favicon.svg`
3. Download Android icon pack
4. Extract to `android/app/src/main/res/`

**Or use Android Asset Studio:**
1. Go to: https://romannurik.github.io/AndroidAssetStudio/
2. Upload icon
3. Generate and download

### Step 6: Build APK/AAB (5 minutes)

**In Android Studio:**

1. **Wait for Gradle sync** (first time takes 5-10 minutes)

2. **Build Debug APK** (for testing):
   - Build → Build Bundle(s) / APK(s) → Build APK(s)
   - Location: `android/app/build/outputs/apk/debug/app-debug.apk`
   - Install on phone: `adb install app-debug.apk`

3. **Build Release AAB** (for Play Store):
   - First, create keystore:
     ```bash
     keytool -genkey -v -keystore goldmart-release.keystore -alias goldmart -keyalg RSA -keysize 2048 -validity 10000
     ```
   - Copy keystore to `android/app/`
   - Build → Generate Signed Bundle / APK
   - Select "Android App Bundle"
   - Use your keystore
   - Output: `app-release.aab`

### Step 7: Test on Your Phone

**Option A: USB Debugging**
```bash
# Enable Developer Options on Android phone
# Enable USB Debugging
# Connect via USB
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

**Option B: Email APK**
- Email the APK to yourself
- Open on phone and install

### Step 8: Publish to Play Store

1. **Create Developer Account**
   - Go to: https://play.google.com/console
   - Pay $25 one-time fee
   - Complete setup

2. **Create App**
   - Click "Create app"
   - Fill in details
   - Upload your `app-release.aab`

3. **Complete Store Listing**
   - App description
   - Screenshots (take from your app)
   - App icon (512x512)
   - Privacy policy URL

4. **Submit for Review**
   - Review takes 1-7 days
   - Your app goes live! 🎉

---

## 📦 Package.json Scripts to Add

Add these to your `package.json`:

```json
{
  "scripts": {
    "build:android": "npm run build && npx cap sync android",
    "open:android": "npx cap open android",
    "sync:android": "npx cap sync android",
    "android:dev": "npm run build:android && npx cap open android"
  }
}
```

Then use:
```bash
npm run android:dev  # Build and open Android Studio
```

---

## 🎨 Create App Icons Quickly

**Method 1: Online Generator**
1. Visit: https://www.appicon.co/
2. Upload `public/favicon.svg`
3. Select Android
4. Download and extract to `android/app/src/main/res/`

**Method 2: Android Asset Studio**
1. Visit: https://romannurik.github.io/AndroidAssetStudio/
2. Upload icon
3. Generate all sizes
4. Download and extract

---

## ✅ Checklist

Before submitting to Play Store:

- [ ] App tested on real device
- [ ] App icon created (all sizes)
- [ ] Keystore created and secured
- [ ] Release AAB built
- [ ] Screenshots taken (2-8)
- [ ] App description written
- [ ] Privacy policy URL ready
- [ ] Content rating completed
- [ ] Developer account created ($25)

---

## 🚀 Quick Commands Reference

```bash
# Build web app
npm run build

# Sync to Android
npx cap sync android

# Open Android Studio
npx cap open android

# Build APK (in Android Studio)
Build → Build Bundle(s) / APK(s)

# Install on device
adb install app-debug.apk
```

---

## 💡 Pro Tips

1. **Test First**: Always test debug APK before building release
2. **Version Numbers**: Increment version code for each release
3. **Keystore Backup**: Save your keystore file securely (can't recover!)
4. **Screenshots**: Take screenshots from emulator or real device
5. **Privacy Policy**: Host on your website (required by Play Store)

---

## 🆘 Common Issues

**Gradle Sync Failed?**
- Check internet connection
- Accept licenses: `sdkmanager --licenses`
- Update Android Studio

**Build Errors?**
```bash
cd android
./gradlew clean
./gradlew build
```

**Icons Missing?**
- Ensure all sizes in `res/mipmap-*/` folders
- Use PNG format (not SVG)

---

**Ready? Start with Step 1 and you'll have an Android app in 10 minutes!** 🚀
