# Silent Pioneers UI

Local UI prototype for Techna's 2026 NASA Space Apps Challenge project.

## Included flows

- Landing screen with **Explore Moon**, **Explore Mars**, and **About** controls.
- Separate Moon and Mars timeline screens covering 1960–2020 in ten-year steps.
- Interactive explorer screen with:
  - compact year switching;
  - clickable artifact placeholders;
  - reserved 3D planet integration area;
  - reserved artifact information area.
- Responsive layouts and reduced-motion support.

## Run locally

```powershell
npm install
npm run dev
```

## Production build

```powershell
npm run build
```

## Integration notes

- Replace `ARTIFACT_SLOTS` in `src/missionData.ts` and the artifact rendering in `src/components/ExploreScreen.tsx` with the team's data.
- Replace `.planet-placeholder` in `src/components/ExploreScreen.tsx` with the team's 3D component.
- Keep mission claims, image credits, and source URLs in the final artifact data model.
