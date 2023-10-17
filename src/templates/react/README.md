# React (TS + Vite) Template

![](https://miro.medium.com/v2/resize:fit:400/format:webp/1*A4AhcQBucS8bLpNRq3HCLg.png)

- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/) - [cheat-sheet](https://www.typescriptlang.org/cheatsheets)
- [Vite](https://vitejs.dev/)
- [axios](https://axios-http.com/docs/intro)
- [@tanstack/react-query](https://tanstack.com/query/latest) - [videos](https://www.youtube.com/watch?v=VtWkSCZX0Ec&list=PLC3y8-rFHvwjTELCrPrcZlo6blLBUspd2&index=1)
- [zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [storybook](https://storybook.js.org/docs/react/get-started/install/)
- [mantine](https://v6.mantine.dev/)

## Start a project:

```
   pnpm i && pnpm dev
```

### Project urls:

LOCAL - http://localhost:5173/
DEV - https://dev-your-prod.com
PROD - https://your-prod.com

## Project structure:

Architecture - [Feature-Sliced-Design](https://feature-sliced.design/ru/docs)

![](https://feature-sliced.design/ru/assets/images/visual_schema-e826067f573946613dcdc76e3f585082.jpg)

### Prefixes for branching:

[Rules for version control and branching in Git](https://habr.com/ru/articles/106912/)

```
   ✨ Features ->    feat-[ticket-number]   - feat-ABC123
   🐛 Fixes    ->     fix-[ticket-number]   - fix-ABC123
   💥 Hotfixes ->  hotfix-[ticket-number]   - hotfix-ABC123
   🚀 Releases -> release-[release-version] - release-1.6
```

### Patterns for commit:

##### Feature

```
   "✨[ABC-123] feat (Added filter)"
```

##### Bug Fix

```
   "🐛[ABC-123] fix (Fixed filter)"
```

##### Hot Fix

```
   "💥[ABC-123] hotfix (Saved company🦸)"
```

##### Release

```
   "🚀[ABC-123] rel (Releasing trash)"
```

![](https://user-images.githubusercontent.com/42924400/111057664-460cb500-849a-11eb-89ea-a60bca318485.png)
