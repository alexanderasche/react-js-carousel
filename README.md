### react-js-carousel

##### React Carousel Component.

## Getting Started

### Installation

**npm**

```bash
npm install @alexcasche/react-carousel
```

**yarn**

```bash
yarn install @alexcasche/react-carousel
```

### Props

| Name         | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| orientation | string | `horizontal` | Set carousel direction (horizontal or vertical). |
| effect | string | `slide` | Set carousel effect (slide or fade). |
| speed | number | `350` | Set carousel transition speed (unit milliseconds). |
| wrap | boolean | `true` | Set carousel wrap. |
| showControls | boolean | `true` | Set carousel control visiblility. |
| showIndicators | boolean | `true` | Set carousel indicators visiblility. |

### Example

````js
import React, { Component } from 'react';
import Carousel from 'react-carousel';
import 'react-carousel/style.css';

class SimpleExmample extends Component {
  render() {
    var options = {
      speed: 400,
      wrap: false,
      showIndicators: false
    };
    return (
      <Carousel {...options} >
        <div>First Slide</div>
        <div>Second Slide</div>
      </Carousel>
    )
  }
}
`````