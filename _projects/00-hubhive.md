---
title: HubHive
link: https://github.com/HubHiveApp
subcategory: academic
---

A React Native and Expo based iOS and Android app built with JavaScript that allows nearby users to chat with each other in group chats accessible only to those near a specific location. Users are also able to see upcoming events that are around their current location. This app interacts with a backend service, built with Python and Flask, that handles user authentication, group chat management (including syncing messages amongst users), event creation and management, and profile management. Most user data are stored in PostgresSQL, while photos are stored in the backend. This backend service is deployed onto a Kubernetes container, with provision volumes for the database and photos that have to be stored in the backend and with autoscaling enabled for when service demand peaks.