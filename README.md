## Description

A simple cross-platform desktop application built on electron that simulates particular instances of the Hydrological Cycle. The simulation works on the basis of the Hydrological Budget Equation, each parameter of which is given a range that is varied across a set timeframe. In this manner the application renders a graph of expected precipitation in the localized region corresponding to the input values over the particular timeframe.

## Getting Started

- Install [Node](https://nodejs.org/en/) and [git](https://git-scm.com/downloads) for your computer

- Enter the following commands in a terminal (bash/cmd/powershell etc.) :

```bash
git clone https://github.com/shadxx7/hydropro.git
cd hydropro
npm install
```

- This will clone the repo and install all the dependencies required to run the mockup

- Now to start the application:

```bash
npm start
```

- To package the application for windows:

```bash
npm package-win
```

Check releases [here!](https://github.com/shadxx7/hydropro/releases/)
