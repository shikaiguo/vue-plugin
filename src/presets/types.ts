import { BaseSchemes } from 'rete'

import { VueRenderPlugin } from '..'
import { ExtraRender } from '../types'

type ComponentProps = Record<string, any>
type RenderResult = { component: any, props: ComponentProps } | undefined | void | null

export type RenderPreset<Schemes extends BaseSchemes, T extends ExtraRender> = {
  update: (context: T, plugin: VueRenderPlugin<Schemes, T>) => ComponentProps
  render: (context: T, plugin: VueRenderPlugin<Schemes, T>) => RenderResult
}