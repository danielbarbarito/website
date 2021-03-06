---
title: Crafting a Great Command Line Tool
date: "2018-11-08T22:12:03.284Z"
description: Crafting a Great Command Line Tool
---

I have created many command line tools and scripts throughout my career. Though the importance of these applications vary greatly (some are vital to achieve certain business goals, while some are simple and may only be run once or twice), the core design of these applications should remain relatively the same.

_What do you mean by design?_

Design in this case is the style in which the tool is coded, the way the tool is presented to the user, and the functionality the tool provides.

__Coding Style__

Commenting your code, writing self-explaining code, and using descriptive variable names are extremely important tenants to abide by when writing command line tools. This point is self-explanitory as it is not unique to command line tools. It is worth reiterating for two reasons, however. One reason is that the ability to have a general idea of what the tool does by looking at its code is invaluable. Another reason is that people often write sloppy code when writing quick, one-off scripts.

__Presentation__

Presentation of a command line tool is generally set by convention. Convention, in the world of command line tools, is key.

Let’s assume we are working with a command line tool called deploy_app. When I type deploy_app --help I should be shown a help message with an example of how to use the tool and all available options that I have access to. This is a convention that has worked well for decades. It is something that users are used to, and it is something that is expected. Not following these conventions is not only lazy but it is dangerous. If I pass --help but the tool runs anyway, then that can cause a huge mess. Speaking of help messages, this is what one should look like…

```shell-session
deploy_app - Uploads the latest version of 'app' to the server.

Usage:
  deploy_app
  deploy_app -h | --help
  deploy_app --version

Options:
  -h --help     Show this screen.
  --version     Show version.
```

__Functionality__

The final point I want to address is the functionality that the tool should provide. A command line tool should be able to be commanded. Giving users options is the key to creating a great command line tool. These options can be very minor, but they may mean the world for the people using the tool. For example, I recently created a tool to run automated tests on an application we were building. At the end of these tests, a slack message containing the results was sent out to a channel. Even though this feature was very useful, the option to --disable-slack was added to the tool to accomodate those who wanted those test results to be hidden for whatever reason. It is the little things that will make the users of your tool satisfied.

I hope this post has inspired you to craft great command line tools, regardless of its size. Have you made a cool tool that uses these design principles? Reach out to me! I’d love to see it.
