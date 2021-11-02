import domController from './dom-controller';

export default function app() {
  const DOMController = domController();
  const start = () => {
    DOMController.renderStart(DOMController);
  };

  return { start };
}
