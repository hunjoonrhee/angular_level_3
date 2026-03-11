---
difficulty: 3
training: true
chapter: "Chapter 1: Architecture, Signals, and State Management"
tags: angular
---

# Turn a container component into a signal-based presentation component

# Challenge Description

In this challenge, we want to change the `MovieDetailsComponent` into a signal-based presentation component.

## Requirements

- Remove all dependency injection from `MovieDetailsComponent`. Instead, use an `InputSignal` to receive `MovieDetails`.
- Change your router config to add a resolver that fetches `MovieDetails` and passes the object as an input to `MovieDetailsComponent`.
  > 💡 HINT: Your router dependency injection configuration will need to be updated to accommodate component input binding.
- Everything should work just like it did before.

## Other Considerations

- If you see the `data-test` attribute anywhere in the boilerplate don't remove it.

## Example of Finished Application

This is an example of what the functionality should look like for the completed exercise. If you’d like to mimic this style, feel free to do so, but it is not required.

![Finished app in this challenge](https://s3.amazonaws.com/images.certificates.dev/l3-training-code-challenge-chapter1.gif)
