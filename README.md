
# oands Animation Package

**oands** is a simple and flexible animation package that allows developers to easily apply animations to HTML elements based on their class names. With a wide range of predefined animations, you can bring your UI to life with minimal effort.

## Features

-   Apply animations by simply adding class names to your elements.
-   Support for various types of animations including fades, slides, bounces, rotations, shakes, and more.
-   Customizable animation durations.
-   Easy-to-use class-based animation system.

## Installation

To install the **oands** package, run:

bash

Copy code

`npm install oands-animations` 

## Usage

1.  **Import the animations into your project:**
    
    In your JavaScript file, you need to import the animations you want to use:
    
    javascript
    
    Copy code
    
    `import { fadein, fadeout } from 'oands-animations/src/fade.js';
    import { slidein, slideout } from 'oands-animations/src/slide.js';
    // Add more animations as needed` 
    
2.  **Adding Animations to HTML Elements:**
    
    To apply an animation to an HTML element, simply add a class name following the format: `oands_animationName_duration`. For example:
    
    html
    
    Copy code
    
    `<div class="oands_fadein_2000">
      This element will fade in over 2 seconds.
    </div>` 
    
3.  **Animation Class Name Format:**
    
    -   Prefix: `oands_` (required)
    -   Animation Name: Name of the animation (e.g., `fadein`, `slidein`, `bounceinright`).
    -   Duration: Optional duration in milliseconds (default is 1000ms).
    
    Example class names:
    
    -   `oands_fadein_1000`: Fades in the element over 1 second.
    -   `oands_slidein_500`: Slides the element in over 0.5 seconds.
4.  **Supported Animations:**
    
    Here is a list of the animations you can use:
    
    -   **Fade Animations:**
        -   `fadein`
        -   `fadeout`
    -   **Slide Animations:**
        -   `slidein`
        -   `slideout`
    -   **Bounce Animations:**
        -   `bounceinright`
        -   `bounceintop`
        -   `bounceinleft`
        -   `bounceinbottom`
    -   **Scale Animations:**
        -   `scalein`
        -   `scaleout`
        -   `scaleininfinite`
        -   `scaleoutinfinite`
    -   **Rotate Animations:**
        -   `rotateright`
        -   `rotateleft`
        -   `rotatex0to360`
        -   `rotatex360to0`
        -   `rotateyinfinity`
        -   `rotatexinfinity`
    -   **Flip Animations:**
        -   `flip`
        -   `flipvertical`
    -   **Shake Animations:**
        -   `shakevertical`
        -   `shakehorizontal`
        -   `shakewobble`
    -   **Other Animations:**
        -   `swing`
        -   `pulse`
        -   `rubberband`
        -   `fancyslide`
        -   `fancyslidereverse`
        -   `jelloanimation`
        -   `wobble`
        -   `rollinanimation`
        -   `rolloutanimation`
        -   `blindsupanimation`
        -   `blindsdownanimation`
    
    For a complete list, refer to the code or documentation.
    
5.  **Handling Multiple Animations:**
    
    If you want to apply multiple animations to the same element, add multiple class names:
    
    html
    
    Copy code
    
    `<div class="oands_fadein_1000 oands_slidein_500">
      This element will fade in and slide in at the same time.
    </div>` 
    
6.  **Customizing Duration:**
    
    You can customize the duration of each animation by specifying it as part of the class name. The duration should be in milliseconds:
    
    html
    
    Copy code
    
    `<div class="oands_fadein_3000">
      This element will fade in over 3 seconds.
    </div>` 
    

## Example

html

Copy code

`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animation Demo</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="oands_fadein_1000">
        This will fade in over 1 second.
    </div>
    
    <div class="oands_slidein_2000">
        This will slide in over 2 seconds.
    </div>
 
    <div class="oands_bounceinright_1500">
        This will bounce in from the right over 1.5 seconds.
    </div>

    <script src="animations.js"></script>
</body>
</html>` 

## Contributing

Contributions are welcome! If you want to contribute or report a bug, feel free to open an issue or submit a pull request.

## License

This package is open source under the MIT License.

----------

Feel free to customize the README according to your preferences or add any additional sections that might be relevant (e.g., advanced usage, troubleshooting).
