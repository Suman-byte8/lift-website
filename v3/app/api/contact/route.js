import { NextResponse } from 'next/server';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const propertyTypes = ['Villa', 'Duplex home', 'Apartment', 'New construction', 'Other'];
const floorCounts = ['2 levels', '3 levels', '4+ levels', 'Not sure yet'];

export async function POST(request) {
  try {
    const contentLength = Number(request.headers.get('content-length') || 0);
    if (contentLength > 12_000) return NextResponse.json({ message: 'Your request is too large.' }, { status: 413 });
    const body = await request.json();
    if (body.website) return NextResponse.json({ ok: true });

    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
    const city = typeof body.city === 'string' ? body.city.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';
    const requestType = typeof body.requestType === 'string' ? body.requestType : 'consultation';

    if (!['consultation', 'brochure'].includes(requestType)) return NextResponse.json({ message: 'Please choose a valid request type.' }, { status: 400 });
    if (name.length < 2 || name.length > 90) return NextResponse.json({ message: 'Please enter your name.' }, { status: 400 });
    if (!emailPattern.test(email) || email.length > 120) return NextResponse.json({ message: 'Please enter a valid email address.' }, { status: 400 });
    if (requestType === 'consultation') {
      if (phone.length < 7 || phone.length > 24) return NextResponse.json({ message: 'Please enter a valid phone number.' }, { status: 400 });
      if (city.length < 2 || city.length > 80) return NextResponse.json({ message: 'Please enter your city.' }, { status: 400 });
      if (!propertyTypes.includes(body.propertyType)) return NextResponse.json({ message: 'Please choose a property type.' }, { status: 400 });
      if (!floorCounts.includes(body.floors)) return NextResponse.json({ message: 'Please choose the number of floors.' }, { status: 400 });
      if (message.length < 5) return NextResponse.json({ message: 'Please add a short note about your home.' }, { status: 400 });
    }
    if (message.length > 1600) return NextResponse.json({ message: 'Your note is a little too long.' }, { status: 400 });

    // Production integration point: forward this validated enquiry to a CRM or email service.
    console.info('AUREL enquiry received', {
      requestType,
      at: new Date().toISOString()
    });
    return NextResponse.json({ ok: true, message: 'Your enquiry has been received.' });
  } catch {
    return NextResponse.json({ message: 'We could not read your request. Please try again.' }, { status: 400 });
  }
}
