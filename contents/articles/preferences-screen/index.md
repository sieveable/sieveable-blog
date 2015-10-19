---
title: Finding Apps with Preferences Screen
author: Khalid-Alharbi
date: 2015-10-19
template: article.jade
---

Preferences screen are commonly used to save user specfic settings that customize the app.
Examples include enabling or disabling notifications, changing themes, colors, language, etc.
In Android, the _Preference_ API is used to build a consistent interface for the preferences screen.
It facilitates interacting with the _SharedPreferences_ class, which handles persisting and retrieving all preferences data. <span class="more"></span>
The _PreferenceScreen_ class is a subclass of the _Preference_ class and acts as
a top level container that holds the other types of preferences in the app.
This class is normally defined in a **user interface** (layout) XML file .

Example:

```xml
<PreferenceScreen>
  <ListPreference/>
</PreferenceScreen>
```
Android has different ways of storing and retrieving preferences.
One commonly used method is called shared preferences, which is essentially a file that holds key-value pairs for the app preferences.
Retrieving shared preferences is normally done in the source **code** through a call to the _getSharedPreferences()_ method of the _SharedPreferences_ API class.

```java
import android.content.Context;
SharedPreferences sharedPref = context.getSharedPreferences(getString("my-app-setting"), Context.MODE_PRIVATE);
```

With sieveable, we can deeply search inside the **UI** and **code** of Android apps in one search query.
We can also use Sieveable to investigate the prevelance of preferences screen and see the distribution of apps by any field in their **listing-details** page.
For example, below is a Sieveable search query for finding apps that use preferences screen
and returns their store categories.

```xml
MATCH app
WHERE
    <PreferenceScreen>
      <ListPreference/>
    </PreferenceScreen>
    <code class="android.content.Context" method="getSharedPreferences"/>
    <store-category>(*)</store-category>
RETURN app, $1
```

We can use the result of this multiple levels query (user interface, source code, and listing details) to show a bar chart of the number of apps by their store categories.

<div class="ct-chart ct-perfect-fourth"></div>
<script src="./chart.js"></script>
