---
title: HubHive
link: https://github.com/HubHiveApp
subcategory: academic
---

A React Native iOS and Android app built with the Expo framework and JavaScript that enables users to communicate in group chats accessible within a radius of a location. This app also allows users to create and discover upcoming events near their current location. Users are also able to see upcoming events that are around their current location. The app interacts with a backend service, built with Python and Flask, that handles user authentication, group chat management (including syncing messages amongst users), event creation and management, and profile management. Most user data is stored in PostgreSQL, while photos are stored in the backend. This backend service is deployed onto a Kubernetes container, containing provisioning volumes for the database and user photos and with autoscaling enabled for when service demand peaks.