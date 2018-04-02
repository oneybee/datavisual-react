import React, {component} from 'react';

export default function HeaderComponent() {
  return (
    <div>
        <div className="headicon"> 
            <i class="fab fa-audible"></i> <i class="fas fa-wifi"></i> <i class="fas fa-battery-full"></i>
        </div>
      <div className="head">
        <i class="fas fa-bars fa-2x"></i>
      </div>
    </div>
  );
}
