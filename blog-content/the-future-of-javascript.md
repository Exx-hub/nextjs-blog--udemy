---
title: Javascript with Superpowers
date: "2022-10-23"
image: ts.jpg
text: TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
isFeatured: true
id: 2
---

Typescript gives javascript superpowers - if you want to up your game as a web developer or as a javascript developer learning **Typescript** is the way to go!

## React with Typescript Snippet

```ts
export type GreetProps = {
  name: string;
  messageCount?: number | string;
  isLoggedIn: boolean;
  isEnrolled?: boolean; // optional prop
};
```

```jsx
function Greet({ name, messageCount = 0, isEnrolled, isLoggedIn }: GreetProps) {
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>
            Welcome {name}! You have {messageCount} unread messages.
          </h2>
          {isEnrolled && <h2>Enrolled</h2>}
        </div>
      ) : (
        <h2>Welcome Guest!</h2>
      )}
    </div>
  );
}

export default Greet;
```

If you want to dive deep into TS, learn more about it [here](https://www.typescriptlang.org/).
