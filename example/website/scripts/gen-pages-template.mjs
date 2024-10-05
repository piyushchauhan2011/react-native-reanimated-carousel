import { upcaseLetter } from "./utils.mjs";

export const pagesTemplate = (kind, page, content) => {
  return `
---
id: ${page}
title: ${upcaseLetter(page)}
sidebar_label: ${upcaseLetter(page)}
description: ${upcaseLetter(page)} animation
keywords:
  - ${kind}
  - ${page}
  - carousel animation
  - carousel animation ${page}
  - react-native-reanimated-carousel
  - reanimated-carousel
  - reanimated carousel
  - react-native
  - snap-carousel
  - react native
  - snap carousel
  - ios
  - android
  - carousel
  - snap
  - reanimated
image:
slug: /examples/${kind}/${page}
---

{/* 

=========================================================================
=========================================================================
This page generated by /scripts/gen-pages.mjs, Don't update it manually 
=========================================================================
=========================================================================

*/}

import { Tabs } from 'nextra/components'
import { Callout } from 'nextra/components'
import Demo from '@/components/Demo'

<Callout type="info" emoji="💡">
  Check out the \`${page}\` animation demo for the full source code [here](https://github.com/dohooo/react-native-reanimated-carousel/blob/main/example/app/app/demos/${kind}/${page}/index.tsx)
</Callout>

<Demo kind="${kind}" name="${page}" />

\`\`\`tsx copy
${content}
\`\`\`
`;
};
