class Tooltip extends HTMLElement {
	constructor() {
		super();
		this.toolTipContainer;
	}

	connectedCallback() {
		const toolTip = document.createElement('span');
		toolTip.textContent = '/{#}?';
		this.appendChild(toolTip);
		toolTip.addEventListener('mouseenter', this.showTooltip.bind(this));
		toolTip.removeEventListener('mouseleave', this.hideTooltip.bind(this));
	}
	showTooltip() {
		this.toolTipContainer = document.createElement('div');
		this.toolTipContainer.textContent = 'Tooltip';
		this.appendChild(this.toolTipContainer);
	}

	hideTooltip() {
		this.removeChild(this.toolTipContainer);
	}
}

customElements.define('hoichoi-tooltip', Tooltip);
