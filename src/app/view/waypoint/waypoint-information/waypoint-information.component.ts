import { Component, Input, OnInit } from '@angular/core';
import { WaypointDataService } from '@base/services/waypoint-data.service';
import { Market, Waypoint, WaypointTrait } from 'spacetraders-angular-client';

@Component({
  selector: 'app-waypoint-information',
  templateUrl: './waypoint-information.component.html',
  styleUrls: ['./waypoint-information.component.css']
})
export class WaypointInformationComponent implements OnInit {

  @Input()
  header = false;
  @Input()
  waypoint!: Waypoint;
  market: Market | undefined;

  constructor(
    private waypointDataService: WaypointDataService,
  ) {}

  ngOnInit(): void {
    this.waypointDataService.getMarket(this.waypoint.symbol)
    .subscribe({
      next: (market) => {
        this.market = market;
      }
    });
  }


  /**
   * Get the trait icon name
   * @param trait the waypoint trait
   * @returns an icon name for the trait
   * @see https://fonts.google.com/icons?hl=fr&selected=Material+Symbols+Outlined:monitoring:FILL@0;wght@400;GRAD@0;opsz@48&icon.style=Outlined
   */
  getTraitIcon(trait: WaypointTrait.SymbolEnum): string {
    switch (trait) {
      case WaypointTrait.SymbolEnum.Uncharted:
        return 'not_listed_location';
      case WaypointTrait.SymbolEnum.Marketplace:
        return 'storefront';
      case WaypointTrait.SymbolEnum.Shipyard:
        return 'rocket';
      case WaypointTrait.SymbolEnum.Outpost:
        return 'home_work';
      case WaypointTrait.SymbolEnum.ScatteredSettlements:
        return 'groups';
      case WaypointTrait.SymbolEnum.SprawlingCities:
        return 'location_city';
      case WaypointTrait.SymbolEnum.MegaStructures:
        return 'location_city';
      case WaypointTrait.SymbolEnum.Overcrowded:
        return 'groups';
      case WaypointTrait.SymbolEnum.HighTech:
        return 'smart_toy';
      case WaypointTrait.SymbolEnum.Corrupt:
        return 'payments';
      case WaypointTrait.SymbolEnum.Bureaucratic:
        return 'gavel';
      case WaypointTrait.SymbolEnum.TradingHub:
        return 'monitoring';
      case WaypointTrait.SymbolEnum.Industrial:
        return 'factory';
      case WaypointTrait.SymbolEnum.BlackMarket:
        return 'local_police';
      case WaypointTrait.SymbolEnum.ResearchFacility:
        return 'science';
      case WaypointTrait.SymbolEnum.MilitaryBase:
        return 'military_tech';
      case WaypointTrait.SymbolEnum.SurveillanceOutpost:
        return 'visibility';
      case WaypointTrait.SymbolEnum.ExplorationOutpost:
        return 'explore';
      case WaypointTrait.SymbolEnum.MineralDeposits:
        return 'terrain';
      case WaypointTrait.SymbolEnum.CommonMetalDeposits:
        return 'terrain';
      case WaypointTrait.SymbolEnum.PreciousMetalDeposits:
        return 'terrain';
      case WaypointTrait.SymbolEnum.RareMetalDeposits:
        return 'terrain';
      case WaypointTrait.SymbolEnum.MethanePools:
      case WaypointTrait.SymbolEnum.IceCrystals:
      case WaypointTrait.SymbolEnum.ExplosiveGases:
      case WaypointTrait.SymbolEnum.StrongMagnetosphere:
      case WaypointTrait.SymbolEnum.VibrantAuroras:
      case WaypointTrait.SymbolEnum.SaltFlats:
      case WaypointTrait.SymbolEnum.Canyons:
      case WaypointTrait.SymbolEnum.PerpetualDaylight:
      case WaypointTrait.SymbolEnum.PerpetualOvercast:
        return 'nightlight_round';
      case WaypointTrait.SymbolEnum.DrySeabeds:
      case WaypointTrait.SymbolEnum.MagmaSeas:
      case WaypointTrait.SymbolEnum.Supervolcanoes:
      case WaypointTrait.SymbolEnum.AshClouds:
      case WaypointTrait.SymbolEnum.VastRuins:
      case WaypointTrait.SymbolEnum.MutatedFlora:
        return 'local_florist';
      case WaypointTrait.SymbolEnum.Terraformed:
        return 'park';
      case WaypointTrait.SymbolEnum.ExtremeTemperatures:
        return 'emergency_heat';
      case WaypointTrait.SymbolEnum.ExtremePressure:
      case WaypointTrait.SymbolEnum.DiverseLife:
        return 'park';
      case WaypointTrait.SymbolEnum.ScarceLife:
        return 'pest_control_rodent';
      case WaypointTrait.SymbolEnum.Fossils:
      case WaypointTrait.SymbolEnum.WeakGravity:
      case WaypointTrait.SymbolEnum.StrongGravity:
      case WaypointTrait.SymbolEnum.CrushingGravity:
      case WaypointTrait.SymbolEnum.ToxicAtmosphere:
      case WaypointTrait.SymbolEnum.CorrosiveAtmosphere:
      case WaypointTrait.SymbolEnum.BreathableAtmosphere:
        return 'nest_eco_leaf';
      case WaypointTrait.SymbolEnum.Jovian:
        return 'air';
      case WaypointTrait.SymbolEnum.Rocky:
      case WaypointTrait.SymbolEnum.Volcanic:
        return 'mode_heat';
      case WaypointTrait.SymbolEnum.Frozen:
        return 'ac_unit';
      case WaypointTrait.SymbolEnum.Swamp:
      case WaypointTrait.SymbolEnum.Barren:
      case WaypointTrait.SymbolEnum.Temperate:
      case WaypointTrait.SymbolEnum.Jungle:
      case WaypointTrait.SymbolEnum.Ocean:
        return 'water'
      case WaypointTrait.SymbolEnum.Stripped:
        return 'question_mark';
      default:
        return 'question_mark';
    }

  }  
}
