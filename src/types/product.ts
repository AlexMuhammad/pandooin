type GalleriesType = {
    gallery_alt_text: string,
    src: string
}

interface IProducts {
    related_galleries: GalleriesType[],
    itinerary_name: string,
    partner_name: string,
    itinerary_short_description: string,
    related_variant: {
        itinerary_variant_pub_price: number
    }
}

export type {IProducts, GalleriesType};